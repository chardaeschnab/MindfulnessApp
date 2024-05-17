--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists videos;
DROP TABLE if exists comments;


--
-- Create Tables
--
/*when we export sql code we can copy it here*/

CREATE TABLE `Videos`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `link` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL

);

CREATE TABLE `Comments`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `text` VARCHAR(255) NOT NULL,
    `video_id` INT NOT NULL,
    `parent_id` INT,
    `reply_id` INT
    -- FOREIGN KEY (video_id) REFERENCES Videos(id)
);


INSERT INTO `Videos` VALUES (1,'test','test','test'),(2,'testtest','testtest','testtest'),(3,'hello','hi','testtest'),(4,'333','','333'),(5,'333','','333'),(6,'//www.youtube.com/watch?v=IIbBI-BT9c4','Happy','This is a happy video '),(7,'//www.youtube.com/watch?v=IIbBI-BT9c4','Happy','This is a happy video '),(8,'','',''),(9,'','',''),(10,'https://www.youtube.com/watch?v=IIbBI-BT9c4','Happy','Enjoy this breathing activity! Made to put a smile on your face and relax you.'),(11,'233','','4444'),(12,'222','','222'),(13,'lll','','kkk'),(14,'','',''),(15,'333','','333'),(16,'https://www.youtube.com/watch?v=IIbBI-BT9c4','Happy','Enjoy this breathing activity! Made to put a smile on your face and relax you.'),(17,'https://youtube.com/watch?v=rkE29fpmsSI','Happy','Discover ways to take care of your mental health that support a child and teen\'s social emotional learning. '),(18,'https://www.youtube.com/watch?v=YplXQW8rhws','Happy','Emotions come in waves, and they can feel big and strong or small and soft. Some can make you feel like you are being dragged under and others feel fun to jump over and through. '),(19,'https://www.youtube.com/watch?v=1us7DmXAuaU','Happy','☁️ I am Cloud ☁️ is a short children\'s bedtime story from Soul Mates which includes a fun rainbow creative visualization and a brief mindfulness breathing exercise.'),(20,'https://www.youtube.com/watch?v=H9Hnisaqlns','Sad','Feeling overwhelmed?  Big emotions taking over?  Learn to self-soothe with Lani and your magical butterfly friend.'),(21,'https://www.youtube.com/watch?v=GupXDKN1rZE','Sad','When I\'m Feeling Nervous is a beautiful story showcasing when happens when a child is feeling nervous and helping them to recognise that feeling nervous is a normal feeling that they can cope with and overcome. '),(22,'https://www.youtube.com/watch?v=GQFWg0hafIA','Sad',' Let\'s learn about various emotions we can feel! Share your feelings comfortably, but remember to express it correctly! '),(23,'https://www.youtube.com/watch?v=AQIQCOY_Im0','Angry','The anger iceberg is a therapeutic tool that helps you understand underlying causes of angry feelings.  '),(24,'https://www.youtube.com/watch?v=L9zwduYp9G0','Angry','The Circle Of Control is a therapeutic tool that helps kids & teens notice the things in their life that are inside and outside of their control.  '),(25,'https://www.youtube.com/watch?v=JP6qNv9Gxq8','Angry','A story to help kids cope with angry feelings.'),(26,'https://www.youtube.com/watch?v=lxxpDF45TPA','Angry','Anger management coping skills for kids and teens.'),(27,'https://www.youtube.com/watch?v=L9zwduYp9G0&t=23s','Angry','The Circle Of Control is a therapeutic tool that helps kids & teens notice the things in their life that are inside and outside of their control. '),(28,' https://www.youtube.com/watch?v=5YtnpPPnqaY','Scared','Grounding techniques can help you focus on the here-and-now, which can help you calm down when feeling anxious, worried, stressed out, or overwhelmed.'),(29,'https://www.youtube.com/watch?v=1XK35Vq_YFc','Scared','Bubble breathing encourages slow deep breathing, which can help reduce stress, regulate the nervous system, and calm the mind during moments of panic. '),(30,'https://www.youtube.com/watch?v=70j3xyu7OGw','Scared','Ever feel that your mind is too busy? Do the \'Thought Bubbles\' video to blow them away.'),(31,'https://www.youtube.com/watch?v=mzmQtoszgdI','Scared','Worry Thoughts started out as a rhyming poem that the author wrote for his daughters when they were quite young. It is now an engaging storybook with full-page illustrations that brings the poem to life.'),(32,'https://www.youtube.com/watch?v=JNVQV9dpLic','Confused','Close your eyes, sit comfortably, and imagine sitting by a peaceful lake surrounded by trees.'),(33,'https://www.youtube.com/watch?v=pFR6oKrCwzk','Confused','This anxiety meditation for kids is perfect for helping your child relax and float away their worries in stressful times. '),(34,'https://www.youtube.com/watch?v=YCe-WQbMWhw','Confused','Come take a moment in this guided meditation of Weather the Storm with FLOW as we learn to destress from school work '),(35,'https://www.youtube.com/watch?v=IIbBI-BT9c4','Neutral','Enjoy this breathing activity! Made to put a smile on your face and relax you.'),(36,' https://www.youtube.com/watch?v=UEuFi9PxKuo','Neutral','This calming brain break is suitable for children'),(37,'https://www.youtube.com/watch?v=xLoK5rOl8Qk','Neutral','A super relaxing lying down body scan!'),(38,'https://www.youtube.com/watch?v=RiMb2Bw4Ae8','Neutral','This deep breathing technique is at the core of many mindfulness and relaxation practices.'),(39,'https://www.youtube.com/watch?v=xLoK5rOl8Qk','Neutral','Great for your emotion check-ins or the end of the school day.');

SET foreign_key_checks = 1;