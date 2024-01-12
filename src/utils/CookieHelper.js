import Cookies from "js-cookie";
const cookieName = "sessionId";
const jwtCookieName = "jwt";

export function setCookie() {
    let cookie = Cookies.get(cookieName);
    if (!cookie) {
        const sessionId = generateUniqueSessionId();
        Cookies.set(cookieName, sessionId, {
            expires: 1, 
        });
        return sessionId;
    }
    return cookie; 
}

export function saveJwtToken(jwt){
    Cookies.set(jwtCookieName,jwt, {
        expires: 7,
    });
}
export function getJwtToken(){
    return Cookies.get(jwtCookieName);
}

function generateUniqueSessionId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000000);
  const sessionId = `${timestamp}_${randomNum}`;
  return sessionId;
}