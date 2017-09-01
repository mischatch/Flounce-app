# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

a = User.create!(username: 'Karlo', password: "password", email: "mail@mail.com", about: "Specialising in user interface, usability, interaction design", userpic: File.new("#{Rails.root}/app/assets/images/project1/UP.jpg"))
b = User.create!(username: 'John', password: "password", email: "mail@mail.com", about: "I am a graphic designer / art director specializing in UI/UX design. I build websites and mobile apps that are visually appealing and easy to navigate.", userpic: File.new("#{Rails.root}/app/assets/images/project2/UP.jpg"))
c = User.create!(username: 'Billy', password: "password", email: "mail@mail.com", about: "Motion Designer. Currently working at ManvsMachine.", userpic: File.new("#{Rails.root}/app/assets/images/project3/UP.jpg"))
d = User.create!(username: 'Sam', password: "password", email: "mail@mail.com", about: "I'm a Lead 3D Artist with a focus on a seamless marriage between design and technical proficiency.", userpic: File.new("#{Rails.root}/app/assets/images/project4/UP.jpg"))
e = User.create!(username: 'Dan', password: "password", email: "mail@mail.com", about: "Since 2013 worked on mmorpg.su game portal, did motion graphics for entertainment videos.", userpic: File.new("#{Rails.root}/app/assets/images/project5/UP.png"))
f = User.create!(username: 'Rick', password: "password", email: "mail@mail.com", about: "We promote all talented car designers from all over the world since 2011!", userpic: File.new("#{Rails.root}/app/assets/images/project6/UP.jpg"))
g = User.create!(username: 'Lars', password: "password", email: "mail@mail.com", about: "I love taking a concept and turning it into reality.", userpic: File.new("#{Rails.root}/app/assets/images/project7/UP.jpg"))
h = User.create!(username: 'TROUBLEMAKERS', password: "password", email: "mail@mail.com", about: "Founded in 2008, Troublemakers.tv is a production company and studio based in the heart of Paris.", userpic: File.new("#{Rails.root}/app/assets/images/project8/UP.jpg"))
i = User.create!(username: 'Alexander', password: "password", email: "mail@mail.com", about: "We are a photographe and retouching studio based in Venice Beach.", userpic: File.new("#{Rails.root}/app/assets/images/project9/UP.jpg"))
j = User.create!(username: 'Miki', password: "password", email: "mail@mail.com", about: "Obsedant is a passion-driven creative studio oriented on premium Motion Design", userpic: File.new("#{Rails.root}/app/assets/images/project10/UP.jpg"))
k = User.create!(username: 'Franz', password: "password", email: "mail@mail.com", about: "Im a digital artist and owner of Steiner Creative. ", userpic: File.new("#{Rails.root}/app/assets/images/project11/UP.png"))
l = User.create!(username: 'Webb', password: "password", email: "mail@mail.com", about: "Commercial automotive photography.", userpic: File.new("#{Rails.root}/app/assets/images/project12/UP.jpg"))

Project.delete_all

pr1 = Project.create!(user_id: a.id, title: 'Portraits', description: '6 Mammals portraits loop animation originally created for instagram')
pr2 = Project.create!(user_id: b.id, title: 'Hardwired', description: 'Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation')
pr3 = Project.create!(user_id: c.id, title: 'Path', description: 'Perpetual Path is a short art film by Maxim Zhestkov about the dialogue and tension between nature and technology')
pr4 = Project.create!(user_id: d.id, title: 'Sand of Time', description: 'Together it reflects HBO’s high production value of content.')
pr5 = Project.create!(user_id: e.id, title: '2030', description: 'I present the 2030 project a matte painting composed of 100% of photos')
pr6 = Project.create!(user_id: f.id, title: 'ARCIPELAGO', description: 'Visit our online store stories by permafrost')
pr7 = Project.create!(user_id: g.id, title: 'Update', description: 'Opener for video series called "Update. Full list of Changes ".')
pr8 = Project.create!(user_id: a.id, title: 'Design Challenge', description: 'We surf the Web daily for hours trying to find useful tips and tricks to enhance our design skills')
pr9 = Project.create!(user_id: g.id, title: 'autistic art', description: 'Our task was to create an identity for Autistic Art')
pr10 = Project.create!(user_id: h.id, title: 'Everything is possible', description: 'TMP worldwide came to us with an idea to produce a series of visuals for their client ARUP.')
pr11 = Project.create!(user_id: k.id, title: 'Drawing', description: 'this drawing took me nearly 7 hours, mixed media on grey paper 25x36 cm')
pr12 = Project.create!(user_id: l.id, title: 'THE LARVAL FORM', description: 'is a short exploration of the colors and shapes inspired by a macro nature')


Comment.delete_all

c1 = Comment.create!(user_id: a.id, project_id: pr1.id, body: 'I had a similar dream.')
c1 = Comment.create!(user_id: b.id, project_id: pr1.id, body: 'disgusting and wonderfull! =)')
c1 = Comment.create!(user_id: c.id, project_id: pr1.id, body: 'Wo!')

c1 = Comment.create!(user_id: d.id, project_id: pr2.id, body: '有一点点恶心')
c1 = Comment.create!(user_id: e.id, project_id: pr2.id, body: 'Jesus...!')
c1 = Comment.create!(user_id: f.id, project_id: pr2.id, body: 'Wow, Awesome work !')
c1 = Comment.create!(user_id: g.id, project_id: pr2.id, body: 'Its just really Awesome! Check my work')
c1 = Comment.create!(user_id: h.id, project_id: pr2.id, body: 'OMG~~~')

c1 = Comment.create!(user_id: i.id, project_id: pr3.id, body: 'good job!please check my work！')
c1 = Comment.create!(user_id: g.id, project_id: pr3.id, body: 'Hi! I love your excellent works. I have some similar projects that might be interesting for you:')
c1 = Comment.create!(user_id: h.id, project_id: pr3.id, body: 'This is art, so very beautiful and well thought about!')
c1 = Comment.create!(user_id: i.id, project_id: pr3.id, body: 'A pleasing piece of work!')
c1 = Comment.create!(user_id: j.id, project_id: pr3.id, body: 'Mesmerizing. And yet on some level quite disturbing. Awesome effect!')
c1 = Comment.create!(user_id: k.id, project_id: pr3.id, body: 'It is rewarding ;) , thank you!')

c1 = Comment.create!(user_id: l.id, project_id: pr4.id, body: 'My comment might not be as impacting or rewarding, but I can say youve triggered and awaken my dormant mind with a Tsunami of inspiration!!')
c1 = Comment.create!(user_id: a.id, project_id: pr4.id, body: 'Could I ask - how the hell you did this? !!!')

c1 = Comment.create!(user_id: b.id, project_id: pr5.id, body: 'Niels, your reaction is the highest kind of reward from the follower I can get. Thank you!')
c1 = Comment.create!(user_id: c.id, project_id: pr5.id, body: 'Very impressive.')
c1 = Comment.create!(user_id: d.id, project_id: pr5.id, body: 'All the "Please check my potfolio" spam deleted ;)!')

c1 = Comment.create!(user_id: e.id, project_id: pr6.id, body: 'Thank you soooo much guys! Your support is amazing! :*')
c1 = Comment.create!(user_id: f.id, project_id: pr6.id, body: 'Wow, amazing work!')
c1 = Comment.create!(user_id: g.id, project_id: pr6.id, body: 'Amazing work!')
c1 = Comment.create!(user_id: h.id, project_id: pr6.id, body: 'beautiful!')
c1 = Comment.create!(user_id: i.id, project_id: pr6.id, body: 'Wow I cant even begin to imagine how you created this. It seems so life like.!')

c1 = Comment.create!(user_id: j.id, project_id: pr7.id, body: 'colors are amazing!')
c1 = Comment.create!(user_id: k.id, project_id: pr7.id, body: 'bro what render engine do you use, is awesome !')

c1 = Comment.create!(user_id: l.id, project_id: pr8.id, body: 'Very impressive. Inspiring work.!')
c1 = Comment.create!(user_id: a.id, project_id: pr8.id, body: 'renderer?!')
c1 = Comment.create!(user_id: b.id, project_id: pr8.id, body: ':O !!!! Wonderful')
c1 = Comment.create!(user_id: e.id, project_id: pr8.id, body: 'very nice ! : )')
c1 = Comment.create!(user_id: c.id, project_id: pr8.id, body: 'Great job! interesting video and color. I wish you inspiration and good experience! I will wait for new works!!')
c1 = Comment.create!(user_id: d.id, project_id: pr8.id, body: 'Amazing!!')

c1 = Comment.create!(user_id: f.id, project_id: pr9.id, body: 'amazing .....')
c1 = Comment.create!(user_id: g.id, project_id: pr9.id, body: 'Fantabulous...')
c1 = Comment.create!(user_id: h.id, project_id: pr9.id, body: 'Hi there great work ... can you tell me how you made this ...!')

c1 = Comment.create!(user_id: i.id, project_id: pr10.id, body: 'Beautiful and scary :)!')
c1 = Comment.create!(user_id: j.id, project_id: pr10.id, body: 'Thank you guys for all the nice words! love you!')
c1 = Comment.create!(user_id: k.id, project_id: pr10.id, body: 'Absolutely stunning work! Well done.')
c1 = Comment.create!(user_id: l.id, project_id: pr10.id, body: 'no words!')
c1 = Comment.create!(user_id: d.id, project_id: pr10.id, body: 'no comment!')

c1 = Comment.create!(user_id: a.id, project_id: pr11.id, body: 'Masterful, I love it')
c1 = Comment.create!(user_id: b.id, project_id: pr11.id, body: 'This is amazing!! Great work')
c1 = Comment.create!(user_id: c.id, project_id: pr11.id, body: 't is disgusting and cool in the same time!!')

c1 = Comment.create!(user_id: e.id, project_id: pr12.id, body: 'So stoked on this! great!')
c1 = Comment.create!(user_id: f.id, project_id: pr12.id, body: 'Excellent work, brilliant work, outstanding.')
c1 = Comment.create!(user_id: g.id, project_id: pr12.id, body: 'Creeping awesome')
c1 = Comment.create!(user_id: h.id, project_id: pr12.id, body: 'Wow. Solid work! Makes me a bit jealous but mostly inspired =D!')
c1 = Comment.create!(user_id: i.id, project_id: pr12.id, body: 'Brilliant! I love this kind of art!')

Image.delete_all

imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/01.jpg"))
imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/02.jpg"))
imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/03.jpg"))
imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/04.jpg"))
imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/05.jpg"))
imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/06.jpg"))
imgPr1 = Image.create!(project_id: pr1.id, image: File.new("#{Rails.root}/app/assets/images/project1/07.jpg"))

imgPr2 = Image.create!(project_id: pr2.id, image: File.new("#{Rails.root}/app/assets/images/project2/01.jpg"))
imgPr2 = Image.create!(project_id: pr2.id, image: File.new("#{Rails.root}/app/assets/images/project2/02.jpg"))
imgPr2 = Image.create!(project_id: pr2.id, image: File.new("#{Rails.root}/app/assets/images/project2/03.jpg"))
imgPr2 = Image.create!(project_id: pr2.id, image: File.new("#{Rails.root}/app/assets/images/project2/04.jpg"))
imgPr2 = Image.create!(project_id: pr2.id, image: File.new("#{Rails.root}/app/assets/images/project2/05.jpg"))


imgPr3 = Image.create!(project_id: pr3.id, image: File.new("#{Rails.root}/app/assets/images/project3/01.jpg"))
imgPr3 = Image.create!(project_id: pr3.id, image: File.new("#{Rails.root}/app/assets/images/project3/02.jpg"))
imgPr3 = Image.create!(project_id: pr3.id, image: File.new("#{Rails.root}/app/assets/images/project3/03.jpg"))


imgPr4 = Image.create!(project_id: pr4.id, image: File.new("#{Rails.root}/app/assets/images/project4/01.jpg"))
imgPr4 = Image.create!(project_id: pr4.id, image: File.new("#{Rails.root}/app/assets/images/project4/02.jpg"))
imgPr4 = Image.create!(project_id: pr4.id, image: File.new("#{Rails.root}/app/assets/images/project4/03.jpg"))


imgPr5 = Image.create!(project_id: pr5.id, image: File.new("#{Rails.root}/app/assets/images/project5/01.jpg"))
imgPr5 = Image.create!(project_id: pr5.id, image: File.new("#{Rails.root}/app/assets/images/project5/02.jpg"))
imgPr5 = Image.create!(project_id: pr5.id, image: File.new("#{Rails.root}/app/assets/images/project5/03.jpg"))
imgPr5 = Image.create!(project_id: pr5.id, image: File.new("#{Rails.root}/app/assets/images/project5/04.jpg"))
imgPr5 = Image.create!(project_id: pr5.id, image: File.new("#{Rails.root}/app/assets/images/project5/05.jpg"))


imgPr6 = Image.create!(project_id: pr6.id, image: File.new("#{Rails.root}/app/assets/images/project6/01.jpg"))
imgPr6 = Image.create!(project_id: pr6.id, image: File.new("#{Rails.root}/app/assets/images/project6/02.jpg"))
imgPr6 = Image.create!(project_id: pr6.id, image: File.new("#{Rails.root}/app/assets/images/project6/03.jpg"))


imgPr7 = Image.create!(project_id: pr7.id, image: File.new("#{Rails.root}/app/assets/images/project7/01.png"))
imgPr7 = Image.create!(project_id: pr7.id, image: File.new("#{Rails.root}/app/assets/images/project7/02.png"))
imgPr7 = Image.create!(project_id: pr7.id, image: File.new("#{Rails.root}/app/assets/images/project7/03.jpg"))
imgPr7 = Image.create!(project_id: pr7.id, image: File.new("#{Rails.root}/app/assets/images/project7/04.jpg"))
imgPr7 = Image.create!(project_id: pr7.id, image: File.new("#{Rails.root}/app/assets/images/project7/05.jpg"))


imgPr8 = Image.create!(project_id: pr8.id, image: File.new("#{Rails.root}/app/assets/images/project8/01.jpg"))
imgPr8 = Image.create!(project_id: pr8.id, image: File.new("#{Rails.root}/app/assets/images/project8/02.jpg"))
imgPr8 = Image.create!(project_id: pr8.id, image: File.new("#{Rails.root}/app/assets/images/project8/03.jpg"))
imgPr8 = Image.create!(project_id: pr8.id, image: File.new("#{Rails.root}/app/assets/images/project8/04.jpg"))


imgPr9 = Image.create!(project_id: pr9.id, image: File.new("#{Rails.root}/app/assets/images/project9/01.jpg"))
imgPr9 = Image.create!(project_id: pr9.id, image: File.new("#{Rails.root}/app/assets/images/project9/02.jpg"))
imgPr9 = Image.create!(project_id: pr9.id, image: File.new("#{Rails.root}/app/assets/images/project9/03.jpg"))
imgPr9 = Image.create!(project_id: pr9.id, image: File.new("#{Rails.root}/app/assets/images/project9/04.jpg"))
imgPr9 = Image.create!(project_id: pr9.id, image: File.new("#{Rails.root}/app/assets/images/project9/05.jpg"))


imgPr10 = Image.create!(project_id: pr10.id, image: File.new("#{Rails.root}/app/assets/images/project10/01.jpg"))
imgPr10 = Image.create!(project_id: pr10.id, image: File.new("#{Rails.root}/app/assets/images/project10/02.jpg"))
imgPr10 = Image.create!(project_id: pr10.id, image: File.new("#{Rails.root}/app/assets/images/project10/03.jpg"))



imgPr11 = Image.create!(project_id: pr11.id, image: File.new("#{Rails.root}/app/assets/images/project11/01.png"))
imgPr11 = Image.create!(project_id: pr11.id, image: File.new("#{Rails.root}/app/assets/images/project11/02.jpg"))


imgPr12 = Image.create!(project_id: pr12.id, image: File.new("#{Rails.root}/app/assets/images/project12/01.png"))
imgPr12 = Image.create!(project_id: pr12.id, image: File.new("#{Rails.root}/app/assets/images/project12/02.png"))
imgPr12 = Image.create!(project_id: pr12.id, image: File.new("#{Rails.root}/app/assets/images/project12/03.png"))
imgPr12 = Image.create!(project_id: pr12.id, image: File.new("#{Rails.root}/app/assets/images/project12/04.png"))
