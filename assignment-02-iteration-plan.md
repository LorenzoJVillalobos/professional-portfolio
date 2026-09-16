CS 4303 – Week 05 – Assignment 02: Iteration Plan

1. P01 Evaluation

What Works Well

Overall, I am happy with the foundation I built for Project 01. The portfolio is no longer just a collection of pages from an earlier class. It is beginning to feel like an actual professional website that represents where I have been professionally and where I am trying to go next.

One of the strongest parts of P01 is the organization of the site. The Home, About, Projects, and Contact pages use consistent navigation, typography, colors, spacing, and page structure. A visitor can move through the site without having to figure out where information is located. I also think the redesigned homepage does a much better job of introducing me than the earlier version of the portfolio. It connects my military service, construction and inspection background, education in Computing Applications, and developing interest in cybersecurity and digital forensics without making the site feel like a copy of my resume.

The Projects page is another area that works well. Instead of only listing class assignments, I have started showing different parts of my technical and professional experience. The portfolio includes web development, coursework, professional experience, cybersecurity, DFIR, and home-lab related categories. I also added JavaScript project filtering, which allows a visitor to narrow the projects by category. That was originally closer to what I expected to develop for P02, so getting it working earlier gave me a better starting point for the next iteration.

The site also has a usable responsive foundation. The layout adjusts to smaller screens, project and information cards reorganize, and the design remains recognizable across pages. GitHub Pages has also worked well as the deployment platform because I can make a change locally, test it, commit it, push it to GitHub, and verify the same change on the live site.

What Does Not Work as Well

The biggest weakness is that some parts of the portfolio still tell visitors what I am learning instead of actually showing them enough evidence of that work. Several project cards explain what a project involved, but not every project has a screenshot, live link, repository link, detailed technology list, or discussion of what I learned. For a professional portfolio, I want the projects themselves to become stronger evidence of my abilities.

The mobile design also works, but I would not consider it finished. The existing navigation can wrap on smaller screens, but I would prefer to build a dedicated mobile navigation solution instead of depending on the desktop navigation to simply rearrange itself.

There are also some unfinished details. The LinkedIn section is still a placeholder, resume access has not been added, and I need to perform a complete review of links, accessibility, keyboard navigation, image alternative text, and contrast. The CSS has also grown as the project has grown, and there are sections that could be cleaned up and organized better before additional features are added.

Another area I want to improve is the balance between professional background and technical work. My previous career experience is important because it demonstrates problem-solving, technical interpretation, communication, and responsibility, but the portfolio ultimately needs to show the technical direction I am moving toward. P02 needs to make cybersecurity, digital forensics, Linux, web development, and technical projects more visible.

Comparison to My Original Proposal

My original proposal called for a functional multi-page portfolio with a homepage, navigation, About content, skills, projects, contact information, responsive design, and a consistent visual style. I completed the majority of that foundation during P01.

Some parts of the project changed as I worked on it. The biggest change was that the cybersecurity and digital forensics direction became more important than I originally expected. As I continued developing the site, I realized that the portfolio should not only document what I have already done professionally. It should also document the transition I am currently making into technology and cybersecurity.

I also moved some interactivity forward earlier than planned by adding project filtering with JavaScript. Since submitting P01, I have continued the iteration process and have already added a functional contact form that uses Formspree for actual message delivery instead of only displaying an email address.

I do not see those changes as moving away from the proposal. They are a continuation of it. The basic purpose of the site has remained the same, but I now have a clearer idea of what the finished portfolio needs to communicate.

2. Changes for P02

Fixes

Clean up unfinished links and placeholders. The LinkedIn placeholder and any incomplete project links need to either become functional or be removed. A professional portfolio should not contain links that appear finished but lead nowhere.

Clean up CSS organization. As I have added new sections and features, the stylesheet has accumulated some repeated or unnecessary rules. I want to clean those up before continuing to add more features so the code remains understandable and maintainable.

Complete cross-device and browser testing. I need to verify navigation, project filtering, the contact form, links, forms, and layouts at several screen sizes and in multiple browsers instead of assuming that something that works on my computer works everywhere.

Improvements

Improve mobile navigation. I want to replace the current wrapping navigation with a dedicated responsive menu controlled with JavaScript. This will make the site easier to use on phones and give me another meaningful JavaScript feature to develop.

Strengthen the project cards. Projects should include more evidence such as screenshots, live project links, GitHub repositories, technologies used, problems encountered, and lessons learned. This will make the Projects page more useful to an employer or recruiter.

Improve accessibility. I will review semantic headings, keyboard navigation, focus states, alternative text, form labels, contrast, and ARIA usage. Accessibility should be part of the final design rather than something added as an afterthought.

Improve content hierarchy. I want the most important information to be easier to scan. My professional history still belongs in the portfolio, but technical skills, current projects, cybersecurity, and DFIR should become more prominent as the site moves toward its final version.

Additions

Functional contact form. I have already started this P02 addition. The Contact page now uses Formspree and JavaScript so visitors can send an actual message through the website. I still need to continue testing success, failure, validation, and mobile behavior.

Resume access. I want to add a clear way for employers and recruiters to view my current resume without searching through the site for the same information.

Additional cybersecurity and home-lab projects. As I complete Linux, networking, DFIR, and cybersecurity exercises, I want to add them as documented projects instead of simply stating that I am interested in those subjects.

Dark/light theme option. I would like to add a JavaScript-controlled theme option and use localStorage so the visitor's selection can persist. This is useful functionality while also giving me additional experience manipulating page state with JavaScript.

More detailed project documentation. For selected projects, I want to document what I attempted, what problem I encountered, how I solved it, and what I learned. I think that tells more about my ability than simply saying that I completed an assignment.

Cuts

I originally considered adding several additional interactive features such as tabs, accordions, modals, a lightbox, search, sorting, and load-more controls. I no longer think the portfolio needs all of them.

I do not want to add JavaScript simply so I can say that the site has more JavaScript. Project filtering, mobile navigation, theme selection, contact-form behavior, and other features that solve an actual problem are more valuable than adding controls that visitors do not need.

I am also not planning to move the project into a framework or add Python or an API just for the sake of making the technology stack larger. HTML, CSS, and JavaScript are appropriate for the current project. If another technology does not improve the portfolio or solve a specific problem, it does not belong in the MVP.

3. Priority and Timeline

Must Complete — Approximately 6–10 Focused Hours

My non-negotiable P02 work is completing the project content, improving mobile usability, cleaning unfinished links and placeholders, adding resume access, testing the contact form, cleaning the CSS, and completing accessibility and cross-device testing.

The portfolio needs to work reliably before I spend time adding optional features. I expect this group of changes to take most of a weekend, especially because testing will probably identify smaller problems that also need to be corrected.

Should Complete — Approximately 5–8 Additional Hours

I plan to improve individual project entries with screenshots, repository links, live links, technologies used, and short explanations of lessons learned. I also want to add more cybersecurity, DFIR, Linux, and home-lab material as appropriate.

I would also like to implement the dark/light theme and save the selected preference with localStorage.

These changes would significantly improve the finished portfolio, but the site could still function as an MVP without every one of them. I expect this work to take two or three additional evenings.

If Time Allows — Approximately 4–8 Additional Hours or More

Stretch goals include more advanced project presentation, additional animations or transitions, a reading/resource section, more extensive project case studies, and additional interactive elements where they provide a real benefit.

I am deliberately keeping these separate from the required work because I would rather finish a smaller number of useful features correctly than create many unfinished ones.

4. Updated Tools and Approach

I am not planning a major technology change for P02. I will continue using HTML, CSS, and JavaScript because those technologies are appropriate for the size of the project and because writing the site directly gives me more practice with the fundamentals than moving it into a framework would at this point.

I will continue using Visual Studio Code as my main editor and Live Server for local testing. Git and GitHub will continue to provide version control, and GitHub Pages will remain the deployment platform. GitHub Desktop has been useful because I can visually review the files I changed before creating a commit instead of blindly committing everything in the project.

One technology I have added since P01 is Formspree. Originally, the Contact page only provided contact information. I wanted the site to have an actual working contact method, so I created a professional portfolio email address and connected the contact form to Formspree. JavaScript handles the form submission and gives the user feedback depending on whether the message was successfully sent.

Browser developer tools have also become more important as the site has grown. I will use them more intentionally during P02 to test responsive layouts, inspect CSS problems, check the console for JavaScript errors, and simulate different screen sizes.

I will continue using ChatGPT as a learning and troubleshooting resource. The most useful approach has been working through changes individually, understanding what the HTML, CSS, or JavaScript is doing, testing it myself, and then committing the change once it works. I do not want AI to simply generate an entire website that I do not understand. The project is more valuable to me if I understand why the code works and can troubleshoot it when it does not.

If I were starting the project over, I would plan the mobile experience earlier and establish a clearer structure for reusable CSS before adding as much content. I would also create a testing checklist from the beginning instead of waiting until later to think systematically about links, accessibility, screen sizes, and browser behavior.

The biggest lesson I learned from P01 is that my original concern about scope was justified. It is very easy for a portfolio to turn into an endless list of features. For P02, I want to be more deliberate. I would rather build a smaller number of features that solve real problems and work correctly than add features simply because I can.

My goal for Project 02 is not just to have a more complicated website. It is to have a more complete, usable, and professional portfolio that clearly shows both the experience I already have and the technical direction I am continuing to build toward.
