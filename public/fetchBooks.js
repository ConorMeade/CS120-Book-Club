async function fetchBooks() {

    // const supabaseUrl = 'https://ojygetcgjabzpxbmdaax.supabase.co';
    // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qeWdldGNnamFienB4Ym1kYWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNDUyNzEsImV4cCI6MjAzNjkyMTI3MX0.K7M16UbjRvJ7YLf7YcTgEdmCbXz5rq1_jV8ERNUqxFA';
    // const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    const url = 'https://infinite-beyond-05850-58f77000e905.herokuapp.com/fetchBooks.php'
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
}