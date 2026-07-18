function UserGreeting(props) {

        if(props.isLoggedin) {
            return
            <h1>Welcome back, {props.name}!</h1>

        } else {
            return
            <h1>Please sign up.</h1>
        
        }
}

export default userGreeting;