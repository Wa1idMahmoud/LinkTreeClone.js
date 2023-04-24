const linkIcon = document.querySelector('.link-icon');
const link = 'https://example.com/my-linktree-clone'; // Replace with your actual link

// Event listener for copying link to clipboard and displaying pop-up message
linkIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(link).then(function() {
    // On success, display "Link copied" pop-up message
    const linkCopiedPopup = document.createElement('div');
    linkCopiedPopup.classList.add('link-copied-popup');
    linkCopiedPopup.innerHTML = 'Link copied!';
    document.body.appendChild(linkCopiedPopup);
    setTimeout(() => {
      linkCopiedPopup.remove();
    }, 2000);
  }, function() {
    // On error, display error message
    alert('Failed to copy link to clipboard');
  });
});
