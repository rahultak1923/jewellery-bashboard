export const JewelleryData = async()=>{
    const response = await fetch("http://localhost:8000/jewellery/",{
        method:"GET",
    });
    return await response.json();
}