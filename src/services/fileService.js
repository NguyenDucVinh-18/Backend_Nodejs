const path = require('path')

const upLoadSingleFile = async (fileObject) => {

    let uploadPath = path.resolve(__dirname, `../public/images/upload`);
    let extName = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, extName);
    let fileName = `${baseName}-${new Date().getTime()}${extName}`;
    let finalName = `${uploadPath}/${fileName}`;


    try {
        await fileObject.mv(finalName);
        return{
            status: 'success',
            path:finalName,
            error: null
        }
    } catch (error) {
        console.log(error);
        return{
            status: 'false',
            path: null,
            error: JSON.stringify(error)
        }
    }
}

const upLoadMultipleFiles = () => {
    
}

module.exports = {
    upLoadSingleFile,
    upLoadMultipleFiles
}