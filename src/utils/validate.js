export const ValidationLogin = (email, password) => {
    // Regular expressions for email and password validation
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);

    // Check email validity
    if (!validEmail) return 'Email is not valid';

    // Check if password is empty
    if (password === '') return 'Password is required';

    // Check password validity
    if (!validPassword) return 'Password is not valid';
};

export const ValidationSignUp = (username, email, password) => {
    // Regular expressions for username, email, and password validation
    const validUsername = /^[A-Za-z0-9_.]+$/.test(username);
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);

    // Check email validity
    if (!validEmail) return 'Email is not valid';

    // Check if username is empty
    if (username === '') return 'Username is empty';

    // Check username validity
    if (!validUsername) return 'Usernames can only use letters, numbers, underscores, and periods.';

    // Check if password is empty
    if (password === '') return 'Password is required';

    // Check password validity
    if (!validPassword) return 'Password must meet requirements: 8-20 characters, at least 1 digit, 1 lowercase letter, no spaces.';
};
