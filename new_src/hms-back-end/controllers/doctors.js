"use strict";
const executeQuery = require("../dbconnection/dbconnection");
const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name"
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description"
  },
  {
    id: "internship",
    numeric: false,
    disablePadding: false,
    label: "Internship"
  },
  {
    id: "clinic",
    numeric: false,
    disablePadding: false,
    label: "Clinic"
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone"
  },
  {
    id: "type",
    numeric: false,
    disablePadding: false,
    label: "Type"
  },
  {
    id: "country",
    numeric: false,
    disablePadding: false,
    label: "Country"
  }
];
const filters = [true, false, false, true, true, true, false];

module.exports.getDoctors = (req, res, next) => {
  let query =
    "SELECT   doc.Id 'id',   CONCAT(users.FIRSTNAME,  ' ', users.LASTNAME) 'name',   doc.Description 'description',  inte.DESCRIPTION 'internship',  cli.DESCRIPTION 'clinic',  doc.BUSINESS_PHONE 'phone',  typ.DESCRIPTION 'type',  cou.DESCRIPTION 'country'  FROM   HMS_DOCTORS doc,   HMS_CLINICS cli,   HMS_INTERNSHIPS inte,  HMS_COUNTRIES cou,  HMS_TYPES typ,   HMS_USERS users,   HMS_COMPONENTS com   WHERE   doc.INT_ID = inte.id AND   doc.COU_ID = cou.id AND   doc.CLI_ID = cli.ID AND   doc.TYPE_ID = typ.id   AND  users.COM_ID = com.id AND  UPPER(com.DESCRIPTION) = 'DOCTOR' AND  users.REF_ID = doc.id;";

  executeQuery(query, function(qResponse) {
    let data = [];
    for (let i = 0; i < qResponse.queryResult.length; i++) {
      let x = qResponse.queryResult[i];
      data.push({
        id: x.id,
        name: x.name,
        description: x.description,
        internship: x.internship,
        clinic: x.clinic,
        phone: x.phone,
        type: x.type,
        country: x.country
      });
    }
    if (qResponse.mainStatus === 200) {
      qResponse.status = 1;
      //qResponse.response = "Successful log In";
    }
    res.status(qResponse.mainStatus).json({
      status: qResponse.status,
      response: { data: data, rows: rows, filters: filters }
      // response: qResponse.response
    });
  });
};
