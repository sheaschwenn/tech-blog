const editFormHandler = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-body').value.trim();
    const id = window.location.pathname.split('/').pop()

    const response = await fetch(`/api/posts/${id}`,  {
        method: 'PUT',
        body: JSON.stringify({title, contents, id}),
        headers:{'Content-Type': 'application/json'}
    })
    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Failed to post')
    }
}


const deletePost = async(event) =>{
    // event.preventDefault();

   
    const id = window.location.pathname.split('/').pop()

    const response = await fetch(`/api/posts/${id}`,{
        method: 'DELETE',
        body: JSON.stringify({post_id:id}),
        headers:{'Content-Type': 'application/json'}
    })
    if(response.ok){
        document.location.replace(`/dashboard`)
    }else{
        alert('Failed to delete')
    }
}

document.querySelector('#edit-form').addEventListener('submit',editFormHandler)
document.querySelector('#delete-btn').addEventListener('click',deletePost)

