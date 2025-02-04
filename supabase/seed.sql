-- Insert sample members
INSERT INTO members (
  student_id,
  name,
  email,
  phone,
  department,
  semester,
  experience,
  why_join,
  about_yourself,
  cv_link,
  status
) VALUES
(
  '23011234',
  'John Doe',
  'john.doe@example.com',
  '+8801712345678',
  'CSE',
  '3rd',
  'I have experience in web development using React and Node.js. I have worked on several projects during my academic career.',
  'I want to join the IT club to enhance my technical skills and collaborate with like-minded individuals on innovative projects.',
  'I am a passionate programmer who loves to learn new technologies. I believe in the power of community and want to contribute to the growth of our university''s tech ecosystem.',
  'https://drive.google.com/sample-cv-1',
  'approved'
),
(
  '23015678',
  'Jane Smith',
  'jane.smith@example.com',
  '+8801787654321',
  'CSE',
  '4th',
  'I have participated in several coding competitions and have experience in mobile app development using Flutter.',
  'I want to be part of a community that shares knowledge and creates opportunities for learning and growth in the tech field.',
  'I am an enthusiastic learner with a keen interest in mobile development and UI/UX design. I enjoy solving problems and helping others learn.',
  'https://drive.google.com/sample-cv-2',
  'approved'
); 