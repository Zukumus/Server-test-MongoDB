import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const userPost = await PostService.create(req.body, req.files.picture);
            res.status(200).json(userPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res) {
        try {
            const userPost = await PostService.getAll();
            return res.status(200).json(userPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const userPost = await PostService.getOne(req.params.id);
            return res.status(200).json(userPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await PostService.update(req.body);
            return res.status(200).json(updatePost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const userPost = await PostService.delete(req.params.id);
            return res.status(200).json(userPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()