const { db, doc, setDoc } = require("../../firebase-config");
const { v4: uuidv4 } = require("uuid"); // To generate unique UID

const createUser = async (userData) => {
    try {
        const uid = uuidv4(); 

        // Extract only the date part (YYYY-MM-DD)
        const formattedTanggalLahir = new Date(userData.tanggal_lahir).toISOString().split("T")[0];

        const userRef = doc(db, "user", uid);
        await setDoc(userRef, {
            nama: userData.nama,
            nim : userData.nim,
            NIK: userData.NIK,
            angkatan: userData.angkatan,
            email: userData.email,
            gender: userData.gender,
            tanggal_lahir: formattedTanggalLahir, 
            tempat_lahir: userData.tempat_lahir
        });

        return { success: true, message: "User successfully created", uid: uid };
    } catch (error) {
        return { success: false, message: error.message };
    }
};



module.exports = { createUser };
