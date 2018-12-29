// if(localStorage.getItem('token') && localStorage.getItem('token') != '') {
//     console.log("Auth ");
// }
// else
//     console.log("not Auth ");
// export default function (ctx) {
export default async ({ app, route, store, redirect }) => {
    // console.log(route);
    if(!isAuth(store)) {
        // return ctx.redirect('/login')
        // console.log("not login");
        return redirect('/login');
    }
}
function isAuth(store) {
// Check if user session exists somehow
    console.log(store.state);
    if (!store.state.auth)
        return false;
}
