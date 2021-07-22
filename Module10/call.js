function welcomeSite() {
  console.log(this.name);
}
let site = {
  name: "mySite"
};
let book = {
  name: "Javascripttutorial"
};
// using call to pass different objects
welcomeSite.call(site);
welcomeSite.call(book);
