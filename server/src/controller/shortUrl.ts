import express from "express"
import { urlModel } from "../models/shortUrl"

export const createUrl = async (req:express.Request, res:express.Response)=>{
    try {
        console.log("the full url is ", req.body.fullUrl);
        
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl})
        if(urlFound.length>0) {
            res.status(409);
            res.send(urlFound)
        }
        else {
            const shortUrl = await urlModel.create({fullUrl})
            res.status(201)
            res.send(shortUrl)
        }
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong"
        })
    }
}
export const getAllUrl = async (req:express.Request, res:express.Response)=>{
    try {
        const shortUrl = await urlModel.find().sort({createdAt:-1})
        if(shortUrl.length<0) {
            res.status(404).send({
                message:"Short url not found"
            })
        }else {
            res.status(200).send(shortUrl)
        }
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong"
        })
    }
}

export const getUrl = async (req:express.Request, res:express.Response)=>{
    const shortUrl = await urlModel.findOne({shortUrl:req.params.id})


    try {
        if(!shortUrl){
            res.status(404).send({message:"Full url nott found"})
        }else {
            shortUrl.clicks++;
            shortUrl.save()
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong"
        })
    }
}

export const deleteUrl = async (req:express.Request, res:express.Response)=>{
    const shortUrl = await urlModel.findByIdAndDelete({_id:req.params.id})
    try {
        if(shortUrl){
            res.status(200).send({message:"Requested Url successfully deleted"})
        }
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong"
        })
    }
}

