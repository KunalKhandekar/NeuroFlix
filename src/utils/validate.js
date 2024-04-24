export const ValidationLogin = (email, password) => {
    const validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validpassword  = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!validemail) return 'Email is not Vaild';

    if (password == '') return 'Password Required';

    if (!validpassword) return "Password is not valid";

};

export const ValidationSignUp = (username,email, password) => {
    const validusername = /^[a-z0-9_.]+$/.test(username);
    const validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validpassword  = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!validemail) return 'Email is not Vaild';
    
    if (username == '') return 'Username is Empty';
    
    if (!validusername) return 'Usernames can only use letters, numbers, underscores, and periods.';

    if (password == '') return 'Password Required';

    if (!validpassword) return "Password must meet requirements: 8-20 chars, 1 digit, 1 uppercase, 1 lowercase, 1 special char, no spaces.";

};