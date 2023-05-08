const commentFormHandler = async(event) =>{
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim()
    const post_id = window.location.pathname.split('/').pop()
    console.log("this is the post id" + post_id)
    if(comment){
        const response = await fetch('/api/comment',{
            method: 'POST',
            body: JSON.stringify({comment, post_id}),
            headers:{'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.reload()
        }else{
            alert('Failed to post')
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit',commentFormHandler)