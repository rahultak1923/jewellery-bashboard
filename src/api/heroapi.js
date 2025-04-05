export const HeroData  = async()=>{
    const response = await fetch("http://localhost:8000/hero/",{
        method:"GET"
    });
    return await response.json();
}