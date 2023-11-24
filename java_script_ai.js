
const api="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";
const button=document.getElementById("button");
const input=document.querySelector("input")
const imgss=document.querySelector('.images-section')
const getImages = async()=>{
    const Options={
        method:"POST",
        headers:{
            "Authorization":` Bearer ${api}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt:input.value,
            n:1,
            size:"256x256"
        })
    } 
    try { const response = await fetch('https://api.openai.com/v1/images/generations',Options)
        const data = await response.json()
        
        
        data?.data.forEach(imageObject => {
            const IMAGE_CONTAINER=document.createElement("div")
            IMAGE_CONTAINER.classList.add('image-container')
            const imageElement=document.createElement("img")
            imageElement.setAttribute('src',imageObject.url)
            IMAGE_CONTAINER.append(imageElement)
            imgss.append(IMAGE_CONTAINER)
        });

    }catch (error){
        console.error(error)
    }

}
button.addEventListener('click',getImages);

