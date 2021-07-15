import usersPosts from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(userPost, picture) {
        const fileName = FileService.saveFile(picture);
        const createdUserPost = await usersPosts.create({...userPost, picture: fileName });
        return createdUserPost;
    }
    async getAll() {
        const userPost = await usersPosts.find();
        return userPost;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id not determined');
        }
        const userPost = await usersPosts.findById(id);
        return userPost;
    }

    async update(userPost) {
        if (!userPost._id) {
            throw new Error('id not determined')
        };
        const updatePost = await usersPosts.findByIdAndUpdate(userPost._id, userPost, { new: true });
        return updatePost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id not determined');
        }
        const userPost = await usersPosts.findByIdAndDelete(id);
        return userPost;
    }
}

export default new PostService()