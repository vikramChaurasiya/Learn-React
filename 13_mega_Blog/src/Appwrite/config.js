import conf from '../Conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service{
    client =  new Client();
    Databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.Databases = new Databases(this.client);
        this.buket = new Storage(this.client);
    }

    async createPost({title, slug,content, featuredImage, status, userId}){
        try {
            return await this.Databases.createDocument(
                conf.aapwriteDatabasedId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.Databases.updateDocument(
                conf.aapwriteDatabasedId,
                conf.aapwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.aapwriteDatabasedId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }

    }

    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                conf.appwriteCollectionId,
                conf.aapwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.Databases.listDocuments(
                conf.aapwriteCollectionId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    // file uploade service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service =  new Service();
export default service;