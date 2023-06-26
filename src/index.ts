import { PeerServer } from "peer";

PeerServer({
  //@ts-ignore
  port: process.env.PORT || 9000,
  path: "/",
  proxied: true
});
