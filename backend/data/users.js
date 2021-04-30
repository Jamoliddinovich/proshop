import bcrypt from 'bcryptjs';


const users = [{
  'email':'nodeJSdeveloperuz@gamil.com',
  'password': bcrypt.hashSync("12345",10),
  'isAdmin' : true,
},{
    'email':'JohnDoe@gamil.com',
  'password': bcrypt.hashSync("12345",10),
  'isAdmin' : false, 
}]
export default users;