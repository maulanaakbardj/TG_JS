const tgjs = require("tigergraph.js");
const cred = require("./config.js");

const conn = new tgjs.createTigerGraphConnection("miigret.i.tgcloud.io", "Entity_Resolution", "tigergraph", cred.password, cred.secret, cred.token)

// conn.getVertices("Account", (data) => {
//     console.log(data);
// })

conn.getEdges("Account", "1", "Same_Owner", (data) => {
     console.log(data);
 })

//conn.runQuery(main_query", {threshold:0.6}, (data) => {
//    console.log(data);
//})

//conn.echo(true, true, true, (data) => {
//    console.log(data);
//})
