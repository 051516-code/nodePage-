import { Router } from "express";
const router = Router()

router.get("/", (req, res)=> res.render('index', {title : "First site with Node js"}));
router.get("/about", (req, res)=> res.render('about', {title : "About"}));
router.get("/contact", (req, res)=> res.render('contact', {title : "Contacts Page"}));

export default router;