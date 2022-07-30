const permission = (req, res, next) => {
  const usertype = req?.body?.usertype;
  const action = req?.route?.path.split('/')[1];
  const employeepermission = [
    'editprofile',
    'applyjob',
    'postfavjob',
    'getfavjob',
    'changepassword',
    'deleteaccount',
    'editresume',
    'getalljobs',
  ];
  const employerpermission = [
    'postjob',
    'deletejob',
    'getshortlisted',
    'deleteapplicant',
    'updatejob',
    'changepassword',
    'editprofile',
    'deleteaccount',
  ];
  if (typeof action === 'undefined' && typeof usertype === 'undefined') {
    return res.status(401).json({ success: false, msg: 'user not found' });
  }
  if (usertype === 'employee') {
    if (employeepermission.includes(action)) {
      next();
    } else {
      res.status(401).json({
        success: false,
        msg: 'not authorized',
      });
    }
  }
  if (usertype === 'employer') {
    if (employerpermission.includes(action)) {
      next();
    } else {
      res.status(401).json({
        success: false,
        msg: 'not authorized',
      });
    }
  }
};

module.exports = permission;
