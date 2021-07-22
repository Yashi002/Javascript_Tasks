function welcome(message) {
  console.log(` ${message}  to ${this.siteName}`);
}
let site = {
  siteName: "javascript.info"
};
let messageData = ['Welcome'];

welcome.apply(site, messageData);
