    const supabaseUrl = 'https://ojygetcgjabzpxbmdaax.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qeWdldGNnamFienB4Ym1kYWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNDUyNzEsImV4cCI6MjAzNjkyMTI3MX0.K7M16UbjRvJ7YLf7YcTgEdmCbXz5rq1_jV8ERNUqxFA';
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function addToLibrary(user_id) {
    // old submitform() function

    // const supabaseUrl = 'https://ojygetcgjabzpxbmdaax.supabase.co';
    // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qeWdldGNnamFienB4Ym1kYWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNDUyNzEsImV4cCI6MjAzNjkyMTI3MX0.K7M16UbjRvJ7YLf7YcTgEdmCbXz5rq1_jV8ERNUqxFA';
    // const supabase = supabase.createClient(supabaseUrl, supabaseKey);
    if (!supabase.auth.user()) {
        alert('You must be logged in to add books to your library.');
        return false;
     }
    
    try {
        const formData = new FormData(document.getElementById('bookForm'));
        const title = formData.get('title');
        const author = formData.get('author');
        const cover = formData.get('cover');
        const pages = formData.get('pages');
        const summary = formData.get('summary');
        const status = formData.get('status');
        const rating = formData.get('rating') || null;
        // const user_id = 6;


        console.log('Starting add to library process'); // Initial log
        const response = await fetch('https://infinite-beyond-05850-58f77000e905.herokuapp.com/addToLibrary.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_id, title, author, cover, pages, summary, status, rating })
        });
    
        const text = await response.text(); // Get the raw response text
        console.log('Raw response:', text); // Log the raw response to the console
    
        // Try to parse the raw response as JSON
        try {
          const result = JSON.parse(text);
          console.log('Parsed JSON:', result);
          if (result.status === 'success') {
            return true;
          } else {
            console.error('Add book error:', result.message);
            return false;
          }
        } catch (error) {
          console.error('Error parsing JSON:', error, 'Raw response:', text);
          return false;
        }
      } catch (error) {
        console.error('Error logging in:', error);
        return false;
      }
}