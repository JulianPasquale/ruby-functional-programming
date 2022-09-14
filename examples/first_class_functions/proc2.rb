def call_proc
  greetings.call
end

name = "Julian"
greetings = proc do
  puts "hello"
  puts name
  puts "Nice to meet you!"
end

call_proc
