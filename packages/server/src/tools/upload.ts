// @ts-ignore
import unf from 'unique-file-name';
import multer from 'multer';
import path from 'path';
import Boom from '@hapi/boom';

const dir = './uploads/';
const namer = unf({
    format: '%4Y-%M-%D/%16b_%6r%.i%8e',
    dir,
});

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, `${dir}${new Date().toISOString().split('T').shift()}/`),
    filename: async (_req, file, cb) => {
        const name = await namer(file.originalname);
        cb(null, `${name.split('\\').pop()}`);
    },
});

const upload = multer({
    storage,
    fileFilter: (_req, file, callback) => {
        const ext = path.extname(file.originalname);
        const acceptedExts = ['.png', '.jpg', '.jpeg', '.gif'];
        if (!acceptedExts.includes(ext)) {
            return callback(Boom.badRequest('Invalid image extension'));
        }
        callback(null, true);
    },
});

export default upload;