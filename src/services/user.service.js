import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import userRepository from '../repositories/user.repository.js';
import conflictError from '../errors/conflict.error.js';

async function signUp (name, email, password) {
    
    const existingUser = await userRepository.findUser(email);
    if( existingUser ) throw conflictError();

    const hash = bcrypt.hashSync(password, 10);
    const body = { name, email, password: hash};

    const user = await userRepository.createUser(body);
    return user;
}

const userService = {
    signUp
}

export default userService;