import bcrypt from 'bcrypt';

const hashedPsswd = async (passwd) => {
    return await bcrypt.hash(String(passwd), 10);
}

export default { hashedPsswd}