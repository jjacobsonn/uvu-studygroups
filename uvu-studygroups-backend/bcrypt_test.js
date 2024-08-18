const bcrypt = require('bcryptjs');

const testPassword = async () => {
    const password = 'password123';
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Original Password:', password);
    console.log('Hashed Password:', hashedPassword);
    
    // Now compare the plain text password with the hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password match (correct password):', isMatch);
    
    // Testing incorrect password comparison
    const wrongPasswordMatch = await bcrypt.compare('wrongpassword', hashedPassword);
    console.log('Password match (incorrect password):', wrongPasswordMatch);
};

testPassword();
