const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#post-desc').value.trim();

  if (description) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ description, post_id: location.href.split("/")[4] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.redirected) {
      location.replace(response.url);
    }
    else if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comment/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
try {
document
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);
}
catch {
  console.log("dodge error if none of the comments are yours")
}
