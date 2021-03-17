import Lendings from "../models/lendings.models.js";

//Add or create a lending
export async function addLending(req, res) {
    try {
        let lending = await Lendings.create(req.body);
        if (lending) {
            res.status(200).json({
                success: true,
                message: 'Lending record created successfully',
                data: lending
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Lending record could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a lending
export async function viewLending(req, res) {
    try {
        let allLendings = await Lendings.findAll({where: {lending_id: req.params.id}});
        if (allLendings) {
            res.json({
                success: true,
                message: 'Lending record retrieved successfully',
                data: allLendings
            })
        } else {
            res.json({
                success: true,
                message: 'No lending record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all Lendings
export async function viewAllLendings(req, res) {
    try {
        let allLendings = await Lendings.findAll();
        if (allLendings) {
            res.json({
                success: true,
                message: 'Lending records retrieved successfully',
                data: allLendings
            })
        } else {
            res.json({
                success: true,
                message: 'No lending records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update a lending record
export async function updateLending(req, res) {
    try {
        let lendingUp = await Lendings.findOne({where: {lending_id: req.params.id}});
        if (lendingUp) {
            lendingUp.update(req.body);
            res.json({
                success: true,
                message: "Lending record updated!",
                data: lendingUp,
            })
            
        } else {
            res.json({
                success: true,
                message: 'No matching lending record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


//Delete a lending
export async function deleteLending(req, res) {
    try {
        let lendingDel = await Lendings.findOne({where: {lending_id: req.params.id}});
        if (lendingDel) {
            lendingDel.destroy();
            res.json({
                success: true,
                message: "Lending record deleted!",
                data: lendingDel,
            })
            
        } else {
            res.json({
                success: true,
                message: 'No matching lending record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// View member lendings
export async function viewMemberLendings(req, res) {
    try {
        let allLendings = await Lendings.findAll({where: {member_id: req.params.id}});
        if (allLendings) {
            res.json({
                success: true,
                message: 'Lending records retrieved successfully',
                data: allLendings
            })
        } else {
            res.json({
                success: true,
                message: 'No lending records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

