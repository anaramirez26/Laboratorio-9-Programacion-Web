import bcrypt from 'bcrypt';

export const hashedPasswd = async (passwd) => {
    return await bcrypt.hash(String(passwd), 10);
}
