// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        slug: 'when-to-leave-user-stories-behind',
        title: 'When to Leave User Stories Behind',
        description: 'The best way to kick off and grow a startup is to guide the product\'s roadmap towards the user\'s problems and challenges. However, as we talked...',
        snippet: `
            <p>The best way to kick off and grow a startup is to guide the product's roadmap towards the user's problems and challenges. However, as <a href="winning-by-leaving-what-brought-you-here.html">we talked about</a> a few days ago, once you're in a mature market full of competitors that offer a similar solution, things change. You need to go beyond the obvious answers, and that happens only when you change how your product is built, and that starts with user stories.</p>
        `,
        html: `
            <p>The best way to kick off and grow a startup is to guide the product's roadmap towards the user's problems and challenges. However, as <a href="winning-by-leaving-what-brought-you-here.html">we talked about</a> a few days ago, once you're in a mature market full of competitors that offer a similar solution, things change. You need to go beyond the obvious answers, and that happens only when you change how your product is built, and that starts with user stories.</p>
            <p>A user story is a concept that was born with the best of intentions. Its purpose was to help the team feel the pain the user feels. Unfortunately, more common than not, a user story is just a disguised feature request. It hardly reveals what's the problem to be solved, why it is important, and how the team will know if that feature added any value at all.</p>
            <p>You can't structure your product's backlog around thin air like this. It would be best if you had something more. That's where job stories are useful.</p>
            <p>A job story brings to the equation three aspects:</p>
            <p><strong>a) Functional:</strong> user goal, where, when, why a feature should exist and what is success</p>
            <p><strong>b) Emotional:</strong> the feelings the user wants to avoid, eliminate or reinforce</p>
            <p><strong>c) Social:</strong> how does mitigation or reinforcement of the feelings above impact the user status and their relationship with friends, family, or coworkers</p>
            <p>A framing like this changes everything. Just compare:</p>
            <h5 class="text--nomargin">User story:</h5>
            <p>"As a user, I want my projects to be auto-saved."</p>
            <h5 class="text--nomargin">Job story:</h5>
            <p>"<i>[functional]</i> After a long day, I don't want to waste hours of work, miss deadlines, or lose clients because something unexpected happened. So, I want the system to auto-save my projects. <i>[emotional]</i> When working on a project, I need to feel confident that I'll deliver on time, so I don't let my clients down. <i>[social]</i> When reviewing a project with a client, this will help me present my self as a reliable partner and increase my chances of keeping and expanding that contract."</p>
            <p>Thinking this way removes several barriers. It makes you think about the ecosystem surrounding the problem. It allows your team to visualize the use cases in a rich context. That's the key to go beyond functional requests.</p>
            <p>The caveat is that you can't formulate something like this without talking to your customers. In the next blog post, we'll show you how to conduct user interviews that enable job story creation.</p>
        `
    },
    {
        slug: 'winning-by-leaving-what-brought-you-here',
        title: 'Winning by Leaving What Brought You Here',
        description: 'People expect that a product will do something for them. Salesforce helps people close more deals. A bank\'s app will let clients check their financial status...',
        html: `
            <p>People expect that a product will do something for them. Salesforce helps people close more deals. A bank's app will let clients check their financial status and perform transactions. Uber takes you from one place to the other.</p>
            <p>The functional aspect of a product is why most of the solutions are created. It's something that customers value as well. When something new comes, they will pay attention to how well the product handles the problem they're facing.</p>
            <p>At some point, a mature market will have several competitors that offer a similar functional solutions. Uber and Lyft do well by taking you from point A to point B. WhatsApp and Messenger both connect you to your friends... You get the idea.</p>
            <p>How do you grow when your market has matured and your competitors can match your functional solution?</p>
            <p>You don't just help people sell more. You help them feel like revenue machines.</p>
            <p>You don't just offer financial data and transactions anywhere. You help them conquer financial wisdom and freedom.</p>
            <p>You might have noticed that product development and product marketing seem to blur. It's not just building features, but guiding your product evolution towards emotional and social benefits. The starting point? Your product backlog.</p>
            <p>That's why you need to ditch user stories and adopt job stories.</p>
            <p>More on that next week.</p>
        `
    },
    {
        slug: 'the-problem-with-standards',
        title: 'The Problem with Standards',
        description: 'It\'s lunchtime, and you\'re hungry. You walk into a fancy restaurant. There’s no staff to greet you when you arrive, so you pick a nice table by the window. A few minutes',
        html: `
            <h5>Experience A</h5>
            <p>It's lunchtime, and you're hungry. You walk into a fancy restaurant. There’s no staff to greet you when you arrive, so you pick a nice table by the window. A few minutes later, someone tells you the table you chose is booked. You switch to a different one.</p>
            <p>You're ready to order, but no one comes to take it. After a while, you finally discover that you need to order through the tablet sitting on the table. You place your order. Thirty minutes pass and nothing happens.</p>

            <p>You get up from your seat and ask someone from the staff what's happening. It seems that you forgot to select the payment method. You walk away and just grab a slice of pizza from the first place you see.</p>
            <h5>Experience B</h5>
            <p>A few minutes before leaving the office, you open the restaurant app on your phone and pick a nice table near the window. As soon as you get there and sit, you grab the tablet and confirm that you arrived. You place your order.</p>
            <p>Ten minutes in and you're eating. As soon as you leave, the payment is made on your behalf through the restaurant's app.</p>
            <h5>Conclusion</h5>
            <p>Same restaurant. Same flow. And that's the problem.</p>
            <p>Replace restaurant with product and flow with features.</p>
            <p>It's all about how you rearrange features so you're aligned with user motivations, skills, and knowledge. The value lies in shaping your product, so people from different contexts learn how to make the most of it, even in their first experience with your product.</p>
        `
    },
    {
        slug: 'three-things-onboarding-is-about',
        title: 'Three Things Onboarding is About | 7wlite Blog',
        description: 'People buy (or subscribe) because they want something. It could be simple and straightforward, like buying a snack because they’re hungry. Most of the time...',
        html: `
            <p><strong>1.</strong></p>
            <p>People buy (or subscribe) because they want something. It could be simple and straightforward, like buying a snack because they’re hungry. Most of the time, it's way more complicated. They could want to perform well at something, stop feeling bored, or increase their status.</p>
            <p><strong>Onboarding is about reinforcing the problems, desires, and needs people are having.</strong> That's why, in the <a href="the-most-valuable-space-in-between.html">previous post</a>, we talked about a crucial moment, rarely explored by startups: the space between people realizing they want something and, later, finding a solution. Think of what your product allows a customer to solve or achieve, build a narrative, pick the most significant keywords, and Google it. Go to your competitor's forums and try Quora. Once you have a basic understanding, get out and talk to folks like the ones you found online. You have to go deep to know what bothers people so badly that they want to pay for a solution.</p>

            <p><strong>2.</strong></p>
            <p>If the solution takes more time and money than they're willing to give to achieve their goal, people give up or find an alternative.</p>
            <p><strong>Onboarding is about showing people that they'll receive way more value than they're paying for.</strong> Every step of an onboarding experience needs to be built around the delivery of tangible values. Don't teach them how to schedule an event. Show them how you'll guarantee they'll never be late again.</p>

            <p><strong>3.</strong></p>
            <p>They could consider going with your product or service and believe you’re worth the time and money, but nothing matters if it’s hard for them actually to solve what they came to solve.</p>
            <p><strong>Onboarding is about progressively guiding a customer to mastery.</strong> You CAN’T do it by giving all customers the exact same experience. Start first-time users with a simpler view of your product to let them get comfortable with it. List the values you want people to experience, create the most basic and easy steps for it, and get rid of anything else in the interface. Then as they gain experience, introduce the more advanced features.</p>

            <p><strong>Bonus</strong></p>
            <p>Onboarding IS NOT adding a layer to your interface with endless modals popping up, explaining how all 73 features of your product work.</p>
        `
    },
    {
        slug: 'the-most-valuable-space-in-between',
        title: 'The Most Valuable Space in Between | 7wlite Blog',
        description: 'A week ago, we talked about how common it is for a startup to optimize its efforts towards metrics that don\'t match their customer\'s goals. It\'s not such a...',
        html: `
            <p>A week ago, <a href="the-struggle-to-add-zero-value.html">we talked about</a> how common it is for a startup to optimize its efforts towards metrics that don't match their customers' goals. It's not such a problem in the short run, but it can become a disaster once you add people to your funnel without really giving them the value that keeps these folks with you.</p>
            <p>Why is this such a wide-spread reality?</p>
            <p>Lack of data. But not that hyped one. You will not figure out what people want by knowing how many times they access your app each week or how much stuff they create with your tool. Even watching people using your product and talking to them about it is not enough.</p>
            <p>Why? Because all of the above is built on product use and you won't find all the reasons why people use a product while they're using it.</p>
            <p>There's no better moment to uncover the real pain your product solves and the ultimate motivations of your customers than when that problem is so urgent that they're willing to act. When they can't go one more day without a solution. When they're so desperate that they're willing to pay for a product or service like yours.</p>
            <p>Next week we'll dive into how you can find these people and collect valuable data, uncovering the real reasons why people try your solution.</p>
        `
    },
    {
        slug: 'the-struggle-to-add-zero-value',
        title: 'The Struggle to Add Zero Value | 7wlite Blog',
        description: 'You motivate people to join you. You tell them how great your product is and what it can do to improve their lives. Some of these prospects land on your page...',
        html: `
            <p>You motivate people to join you. You tell them how great your product is and what it can do to improve their lives.</p>
            <p>Some of these prospects land on your page. Once there, you continue to convince them that your solution is the right one.</p>
            <p>You prompt them to read the testimonials. You present them with a comparison chart. You show how people are getting amazing results out of your solution. By now, you spent a lot of time and money.</p>
            <p>Finally, they start a trial, create an account, or pay for several months in advance. You pat yourself on the back. One more conversion made, but is this really a success?</p>
            <p>If the measure of success is how much value a company generates to its audience, the behaviors you optimized your efforts for (purchase, sign-up, etc) mean nothing. So far, you added ZERO value to your customer.</p>
            <p>How about you start optimizing most of your efforts towards situations in which your customers experience significant, consistent, and meaningful value?</p>
            <p>More on this next week...</p>
        `
    },
    {
        slug: 'four-forces-product-adoption-rejection',
        title: 'The Four Forces That Make People Adopt or Leave a Product | 7wlite Blog',
        description: 'If people hate the product they use now, they\'ll consider switching. That\'s a push force. If they see something in your product that will make them perform...',
        html: `
            <p>If people hate the product they use now, they'll consider switching. That's a push force.</p>
            <p>If they see something in your product that will make them perform better (without pissing them off), they'll consider adopting it. Call it a pull force.</p>
            <p>Both of the above are positive forces that could act in your favor. Reinforce them, especially when onboarding new users to your product. Make it clear that:</p>
            <p>a) You don't have the annoying stuff your competitors have</p>
            <p>b) You are the one that helps them get more value, faster than anyone else</p>
            <p>When talking about the different things your product does, let people know how it works. If you don't explain it, they'll get anxious, and the switch won't happen. That's the third force: anxiety.</p>
            <p>When considering going to a different solution, customers will also want to know how to handle the switch. Let them know that your product and/or your team will take care of this for them. RReassure them of how your product assists them importing data, customer support, and compatibility, so they stop fearing the change. And this is the last force: habit.</p>
            <p>You convert a customer from your competitors when push and pull forces are bigger than anxiety and habit forces. You lose customers when the same happens, only in favor of your competition.</p>
        `
    },
    {
        slug: 'quality-standards-hurt-product-quality',
        title: 'Your Quality Standards are Keeping your Product from Being Better | 7wlite Blog',
        description: 'Of course you want to build a better product and so does the rest of your team. The thing is, it\'s challenging to make better stuff when everyone has their own...',
        html: `
            <p>Of course you want to build a better product and so does the rest of your team. The thing is, it's challenging to make better stuff when everyone has their own definition of what better is. If you really want a better product, you'll have to work with your team to decide what better means and what needs to be better.</p>

            <p>You need to determine and maintain shared quality standards, so ambiguity never takes hold. And, if you're a product leader, you'll have to act as a bridge between what your team and your stakeholders consider quality. So, it's crucial to be able to communicate effectively what your core principles of quality are.</p>

            <figure class="post__figure">
                <img class="post__image" src="/assets/images/posts/quality-standards-hurt-product-quality.jpg" srcset="/assets/images/posts/quality-standards-hurt-product-quality@2x.jpg 2x" alt="Standards" />
                <figcaption class="post__figcaption">Once everybody agrees on standards, things are easier to measure</figcaption>
            </figure>

            <p>Shared quality standards are only possible when you have shared rituals to keep them in place. Here's a good starting point:</p>

            <p>1. Gather your team for two hours or so and hand them sticky notes. Ask them to write down five words that represent essential qualities for your product's success.</p>
            <p>2. Ask each team member to share the words they picked and why they believe it's important. Once the person is done, ask them to place the words on a whiteboard.</p>
            <p>3. As a team, discuss what three words best represent your quality standards.</p>
            <p>4. Based on the three words picked, ask each person to take ten minutes to write down what needs to be improved or added to the product so that the specific quality aspect is reinforced. Their answer should associate metrics with these attributes. A good template is: "Our product is going to be more [quality] once it does/has [feature or enhancement]. We'll know we reached our goal when [metric] is [result]."</p>
            <p>5. As a team, choose the most important projects to tackle, using those three quality attributes as filters. The number of projects can vary, depending on the size of your team and the complexity involved.</p>
            <p>6. Repeat this ritual for every project you have.</p>

            <p>As time goes on, what you, your team, and your stakeholders value as a team may change. So, make sure to revisit your core principles of quality from time to time.</p>
        `
    },
    {
        slug: 'going-high-level-goals-feature-delivery',
        title: 'Going from High Level Goals to Feature Delivery | 7wlite Blog',
        description: 'Products only exist (or should exist) to solve human needs, from people that went after the product with an expectation. A product is effective if it fully',
        html: `
            <p>Products only exist (or should exist) to solve human needs, from people that went after the product with an expectation. A product is effective if it fully satisfies these needs. On the other hand, a product is efficient once it achieves these goals in a faster, easier, or simpler way than the existing alternatives.</p>

            <figure class="post__figure">
                <img class="post__image" src="/assets/images/posts/going-chrono-cut.jpg" srcset="/assets/images/posts/going-chrono-cut@2x.jpg 2x" alt="Going Chrono Cut" />
                <figcaption class="post__figcaption">In the end, a customer adopts a product if it's effective, but will only keep using it as long as it does the job efficiently</figcaption>
            </figure>

            <h5>Effectiveness: solving what matters</h5>
            <p>A user goal could seem simple. Let's say you lead a team that needs to build a to-do list manager. A simple goal, right? We need to help people manage their daily tasks.</p>
            <p>Not so fast. What user interviews are probably going to show you is those goals usually come with a point of view. It all depends on the people you're targeting for your product. So, for one group of people, an app like this exists to:</p>
            <p>"Improve my daily productivity"</p>
            <p>To another, it could be:</p>
            <p>"Make progress in personal and long-lasting projects"</p>
            <p>And to a third one, it might be:</p>
            <p>"Turn complex corporate projects into daily steps"</p>
            <p>The interviews are also going to reveal that a goal is usually made of multiple scenarios. Effectiveness is about making these scenarios come true. For example, if the audience's goal is to "Make progress in personal and long-lasting projects", these could be the scenarios involved:</p>
            <p>a) "I clearly see my evolution, on the different projects I created"</p>
            <p>b) "I feel that my friends and family are important in this journey, so it's crucial that they participate in it"</p>
            <p>c) "I prefer to not disclosure certain projects until a certain point"</p>

            <h5>Efficiency: solving well what's important</h5>
            <p>A goal's scenarios are the starting point to achieve efficiency. However, the focus here is not to design with them in mind. Instead, your design should stimulate and make more frequent the behaviors that make these scenarios happen.</p>
            <p>Continuing on the same example, let's say you want to tackle this scenario:</p>
            <p>b) "I feel that my friends and family are important in this journey, so it's crucial that they participate in it"</p>
            <p>Some user behaviors need to happen, to make this scenario become a reality. Here, we need the user to invite their friends and family into the project. Also, we want that their friends and family to accept the invitation and give feedback.</p>

            <h5>Features: a logical next step</h5>
            <p>Now, you have a clearer picture to begin thinking about features. We're no longer dealing with something as broad and unclear as "making a to-do list manager". We're designing to enable behaviors that support one of the multiple aspects involved in a given goal.</p>
            <p>Effectiveness is solving what matters. Efficiency is picking the best path to do it. Behaviors are where you design to make both possible.</p>
        `
    },
    {
        slug: 'growth-besides-marketing-sales',
        title: 'When Growth has Nothing to Do with Marketing and Sales | 7wlite Blog',
        description: 'The math behind most tech companie\'s acquisition strategy could be unsustainable. When you\'re growing a business, three numbers matter more...',
        html: `
            <p>The math behind most tech companie's acquisition strategy could be unsustainable. Things usually go like this:</p>

            <ol>
                <li><p>a) Sales and marketing go after a given market segment</p></li>
                <li><p>b) They engage a fraction of these people, which become leads</p></li>
                <li><p>c) These leads are nurtured, and some of them become customers</p></li>
            </ol>

            <p>So, we're necessarily talking about a funnel. What is the ultimate success here? We could consider address every single person of a given market segment and convert to customers as many people as possible.</p>

            <figure class="post__figure">
                <img class="post__image" src="/assets/images/posts/growth-besides-funnel.jpg" srcset="/assets/images/posts/growth-besides-funnel@2x.jpg 2x" alt="Funnel" />
                <figcaption class="post__figcaption">A classic and once effective approach</figcaption>
            </figure>

            <p>On the other hand, this is concerning. When there is no one else to target, you only have two options to grow: go to a different market or try to convince some of the folks that already heard of you or experienced your product to give it a second chance. That's why companie's go abroad or expand their product scope or advertise, so people can remember them again.</p>

            <h5>A third path</h5>
            <p>When you're growing a business, three numbers matter more than anything else:</p>
            <ol>
                <li><p>1. The cost of acquiring a new customer (CAC)</p></li>
                <li><p>2. Customer lifetime value</p></li>
                <li><p>3. How long that customer stays with you</p></li>
            </ol>

            <p>You are probably focused on lowering your CAC. That's because it's something practical. You hire more salespeople or increase your marketing efforts or advertise more. And results do come fast. Sometimes you do see the difference in a matter of days.</p>
            <p>The thing is, these peaks don't seem to support long term growth. At least not at the levels you expect. Also, this approach costs a lot of money. You're feeding the top of your funnel, but what about leaking that happens daily? How many people are abandoning your product every month?</p>

            <h5>From funnel to flywheel</h5>
            <p>It's much more difficult to address customer lifetime value and length. Sales teams won't do much here. Marketing efforts can help, especially on the customer support front. Things get even harder when we consider tech products. Typically, people prefer to experience the product instead of listening to your sales team.</p>

            <figure class="post__figure">
                <img class="post__image" src="/assets/images/posts/growth-besides-group.jpg" srcset="/assets/images/posts/growth-besides-group@2x.jpg 2x" alt="Group" />
                <figcaption class="post__figcaption">Funnels are about acquiring. Flywheels are about acquiring and delighting, so customers start selling for you.</figcaption>
            </figure>

            <p>Most of them won't even give your chatbot a chance. You need to think about growth on a different level, like something tied to the experience with your product. It must deliver clear value and delight people, from the very first interaction.</p>
            <p>What you need is to build a base of customers who are willing and able to say remarkable things about your product, and this creates a virtuous cycle. That's how you go from a funnel-based go-to-market strategy into a flywheel.</p>
            <p>When people talk about your brand, they're helping you acquire new customers in a very efficient way. People believe people. This creates a cycle where the post-sale experience feeds your sales process.</p>
            <p>The more delighted your customers are, the more they'll promote your product. The more they talk about you, the faster your flywheel spins. That means, in the end, a more rapid business growth.</p>
            <p>This is the right move in your customers' benefit and also the best thing you can do for your business. It's a beautiful place to be.</p>

            <h5>The math tells the same thing</h5>
            <p>In the second part of this article, we're going to check the numbers that illustrate how this approach could be a game-changer for you.</p>
            <p>Stay tuned!</p>
        `
    },
    {
        slug: 'product-market-fit-makes-people-sell',
        title: 'Product-Market Fit is When People Sell for You | 7wlite Blog',
        description: 'Optimizing for short term conversions such as clicks and signups is one part of the success equation. If the product isn\'t genuinely great at delivering on the...',
        html: `
            <p>Optimizing for short term conversions such as clicks and signups is one part of the success equation. If the product isn't genuinely great at delivering on the promise, then people are going to use once and leave. The same thing happens if your product has a core set of features that would bring value to its customers, but somehow the way everything was built prevents these folks from experiencing the expected value.</p>
            <p>You want people to understand and use your product enough to recognize the value it provides. But you want more. What you are after is having them sharing their positive experience with others. You want to replicate this use and share action consistently.</p>
            <p>This is Product-Market Fit. It's when your customers become your salespeople.</p>

            <h5>How do you know when you achieve it?</h5>
            <figure class="post__figure">
                <img class="post__image" src="/assets/images/posts/product-market-interviews.jpg" srcset="/assets/images/posts/product-market-interviews@2x.jpg 2x" alt="Interviews" />
            </figure>

            <p>You need to talk to actual users (at least 30 people who used the product in the last couple of weeks). The main goal is to reach a point in which at least 40% of people would feel very disappointed if they could no longer use your product. When that happens, you have a sure sign of sustainable growth and a clear path to scale. Your primary focus is to improve your product until you reach that threshold.</p>
            <p>Sean Ellis has this useful <a href="https://www.surveymonkey.com/r/CFXJH7M" target="_blank" rel="noreferrer">survey</a> that guides these conversations.</p>

            <p>Rahul Vohra, from Superhuman, built on it by putting together an efficient <a href="https://firstround.com/review/how-superhuman-built-an-engine-to-find-product-market-fit" target="_blank" rel="noreferrer">method</a>, that helped them achieve incredible growth.</p>
            <p>Research of this kind gives you precious insights about the people who consider your product a "must-have". They'll tell you what to reinforce in your product to make it shine among its competitors. Another benefit of observing how and to whom your most loyal customers are sharing their experiences is that you'll know which markets you should approach.</p>
            <p>It's crucial to understand: What is the key benefit that they get from experiencing your product? Why is that benefit important to them? By knowing this, you'll make solid decisions on your roadmap and will use this information to shape the path for all prospects to deliver this experience and benefit before they abandon the product.</p>

            <h5>Product-Market Fit is the beginning of qualified decisions</h5>
            <figure class="post__figure">
                <img class="post__image" src="/assets/images/posts/product-market-doors.jpg" srcset="/assets/images/posts/product-market-doors@2x.jpg 2x" alt="Doors" />
            </figure>

            <p>The most important decision is when to scale grow. If you do it before having Product-Market Fit, you'll kill your business. If you have product/market fit and you don't acknowledge that, you'll miss the opportunity to scale growth successfully.</p>

            <p>Here are other several key decisions that become clear once you know you have Product-Market Fit:</p>
            <ol class="list list--alpha">
                <li class="list__item">You select the right audiences, the ones who understand and value your product</li>
                <li class="list__item">You reposition your product having customer's perception as a foundation</li>
                <li class="list__item">You put together an onboarding flow that delivers value much earlier</li>
                <li class="list__item">Your product roadmap is reshaped, having value validation as milestones</li>
                <li class="list__item">You pick marketing channels and scale growth from a more strategic foundation</li>
            </ol>

            <p>An amazing side effect is that it will become evident how to implement organic growth boosters within your product, making it even easier for people to sell for you.</p>
        `
    }
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
