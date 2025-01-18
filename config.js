const {createClient} =supabase
// console.log(supabase)
const supabaseUrl="https://aqldbyqnejfoqqdeylto.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxbGRieXFuZWpmb3FxZGV5bHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMTE4MjIsImV4cCI6MjA1MjY4NzgyMn0.DAoC4VPloUwDgchpUKkVn1XHW2YFlCX7z3o4qOVJhD4"

const supabaseClient = createClient(supabaseUrl, supabaseKey)

window.supabase = supabaseClient


