---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
title: Portfolio
---     

<!-- SIDEBAR HTML from @dextercarpenter -->
<div class="sidenav">
	<a href="#"><span class="navheader">Contents</span></a>
	<a href="#meadow"              >Meadowlark Mini</a>
	<a href="#esra"              >ESRA Rocketry Team</a>
  <!--
	<a href="#beavs" >BEAVS Air Brakes</a>
	<a href="#launch" >Rocket Launch Boxes</a>
	<a href="#l1">Rocketry L1 Certification</a>
  -->
	<a href="#burl"        >Burl Mini</a>
  <a href="#bb8"         >BB-8 Robot</a>
  <a href="#miso"        >MISO Data Logger</a>
  <a href="#keeb"        >Keyboards</a>
  <a href="#opens"       >OPEnS Lab Research</a>
  <a href="#frc"         >FIRST Robotics</a>
  <a href="#instructable">Instructable</a>
</div>

# Portfolio



<hr><div class="container">
  <div class="Title"><h2 id="meadow">Meadowlark Mini Flight Computer</h2></div>
  <div class="Content">After finishing the <a href="#esra">Spaceport America Cup</a> rocketry competition, I was inspired to obtain my Level 2 high power rocket certification. To accomplish that goal I needed a flight computer. After some research I decided to build one myself. The flight computer I created aims to deliver low-cost dual deploy functionality. The controller is equiped with dual pyro channels, buzzer, MicroSD for logging, altimeter, gyroscope, and accelerometer, which fits in a 29mm chassis for H class motors.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/Meadowlark-Mini/tree/main" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo"><img src="/assets/images/meadowlark-mini_cover.jpg" alt="Meadowlark Mini PCB"></div>
</div>

<hr><h2 id="esra">Experimental Sounding Rocketry Association (ESRA) Team</h2>

In September 2023, the President of Oregon State University's (OSU) American Institute of Aeronautics and Astronautics (AIAA) program reached out and asked me to form a new rocketry team. I attended numerous club recruiting events and presented at the AIAA Fall general body meeting to recruit a diverse team of undergraduates. By December our team was awarded an OSGC grant and accepted to compete at the Experimental Sounding Rocketry Association’s (ESRA) Spaceport America Cup. As Team Captain, I secured space to work in, materials, and supplies. Over the next four months our team designed, prototyped, tested, and launched our rocket for the first time in Brothers, Oregon. The rocket was successfully recovered with only minor damage to the forward section of the rocket due to a parachute failure. The rocket needed to be shortened by a foot to remove the damage. With the change to the lenght of the rocket strakes (long fins above our main fins) were added to increase stability. During static testing the rocket motor experienced an explosive catostrophic failure so were unable to perform a second flight prior to competition.

<img src="/assets/images/esra-rocketcad_banner.jpg" alt="Rocket CAD showing cutway of the rocket">

<div class="container">
  <div class="Title"></div>
  <div class="Content">During the flight at Spaceport America, the rocket lost the motor due to a gas leak. The rocket flew to only 5000ft before returning to the ground ballistic. While this was an suboptimal outcome, I could not be more proud the team and everything we accomplished. Our technical report scored well and our engineering was sound. I have immense gratitude for everyone who spent weekends and late nights, I couldn't have asked for a better team. Everyone's dedication and perseverance was inspiring.
  <embed src="/assets/pdfs/Team_68_Project_Technical_Report_to_the_2024_Spaceport_America_Cup.pdf" width="100%" height="560" type="application/pdf">

  <iframe width="90%" height="280" src="https://www.youtube-nocookie.com/embed/e0LpQ6RYETU?si=Dz5Wc0p07-p72aYf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  <h6>Video credit: Cody Eutsler</h6>
  </div>
  <div class="Link"></div>
  <div class="Photo">
  <img src="/assets/images/esra-beavs_cover.gif" alt="BEAVS air brake system installed in the rocket">
  <img src="/assets/images/esra-sa-prelaunch_cover.jpg" alt="BEAVS air brake system installed in the rocket">
  <img src="/assets/images/esra-rocketflight_cover.jpg" alt="BEAVS air brake system installed in the rocket">
  <img src="/assets/images/esra-recovery_cover.jpg" alt="BEAVS air brake system installed in the rocket">
  </div>
</div>

<div class="subcontainer">
  <div class="Title"><h3 id="beavs">BEAVS Air Brakes</h3></div>
  <div class="Content">For my senior capstone project at Oregon State University, I brought back the Blade Extending Apogee Variance System (BEAVS) research project. I aimed to make the largest, most advanced air brakes at Oregon State to date. The system is actuated by a single high torque servo motor with a rack and pinion to control the blades. The controller is run off a RP2040 with an altimeter and 9-axis inertial measurement unit. The parts were machined from 7075 aircraft grade aluminum with the total system weighing 1.6kg (hardware, electronics, and batteries). The blades sit flush with the 158.75mm (6.25") airframe and are able to extend 70mm (2.76") out each side of the airframe. The BEAVS4 system flew at Spaceport America however was unable to activate due to a motor failure early in flight.
  <br>
  <br>
  <center><img src="/assets/images/beavs-module_cover.jpg" width="70%" alt="BEAVS air brake system outside of the rocket"></center>
  </div>
  <div class="Link"><form action="https://github.com/colinhalebrown/BEAVS4" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/beavs-installed_cover.jpg" alt="BEAVS air brake system installed in the rocket">
  <img src="/assets/images/beavs-firsttest_cover.gif" alt="BEAVS air brake system installed in the rocket">
  </div>
</div>
<div class="subcontainer">
  <div class="Title"><h3 id="launch">Rocket Launch Boxes</h3></div>
  <div class="Content">After our first launch in Brothers, Oregon, our team decided we needed a more reliable and up to date launch control system. I built a new launch control system that followed OROC and Tripoli guidelines to ensure that it met all safety standards. 
  <br>
  Each box in the system is powered by an RP2040 equipped with LoRa radios at 933MHz and is equipped with BNC quick-connects for antennas and USB-C for charging and debug. They have the same radio indicators and buzzers for visual and audio cues which are synced at all times. The field box has a removable 10ft cable with clips to connect to the ignitor. The system is mechanically disconnected until it is armed and fired remotely. With the box being turned on before evacuating the pad. The control box is able to see the status of the field box remotely. It is able to arm the field box with a key and fire with a button controlling two separate relays in the field box. With indicators for continuity in case of a miss-fire. 
  <br><br>
  If this project continues the hand-wired boards need to be replaced with proper PCBs for long term reliablity. 
  <br>
  <br>
  <center><img src="/assets/images/launchboxes-pcbs_cover.jpg" width="70%" alt="Both pcbs hand assembled to control the two launch boxes"></center>
  </div>
  <div class="Link"><form action="https://github.com/colinhalebrown/OSUAIAA2024_LaunchBoxes" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/launchboxes-enclosures_cover.jpg" alt="The control and field launch boxes stacked">
  <img src="/assets/images/launchboxes-controls_cover.jpg" alt="The control and field launch boxes stacked">
  </div>
</div>
<div class="subcontainer">
  <div class="Title"><h3 id="l1">High Power Rocketry L1 Certification</h3></div>
  <div class="Content">Part of my role as Team Captain was transporting the rocket motors. The university insurance required that we get high power certified. I was L1 certified by NAR in Brothers, Oregon with a successful flight of my Balsa Rocket on an H class motor.
  <br>
  <br>
  <center><img src="/assets/images/l1-flight_cover.gif" width="70%" alt="Both pcbs hand assembled to control the two launch boxes"></center>
  </div>
  <div class="Link"></div>
  <div class="Photo">
  <img src="/assets/images/l1-photos_cover.jpg" alt="The control and field launch boxes stacked">
  </div>
</div>


<hr><div class="container">
  <div class="Title"><h2 id="burl">Burl Mini Air Monitor</h2></div>
  <div class="Content">The goal of the project was to deliver a Wi-Fi capable air sensing module able to monitor gas concentrations and air quality for uses in indoor farming and air monitoring. I designed it have competitive functionality with commercial options while adding modern, user focused features. This involved adding USB-C for power and debugging, MicroSD for data logging and configuration, and user swapable battery.
  <br><br>
  I focused on the user experience and making a polished product, while also trying to minimize the number of parts onboard. To keep the system safe, the enclosure lid snaps in place covering the sensors and MicroSD slot from damage during operation. The base is equipped with mounting holes and slots for various mounting options.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/Meadowlark-Mini/tree/main" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/burl-pcb_cover.jpg">
  <img src="/assets/images/burl-enclosure_cover.jpg"></div>
</div>


<hr><div class="eContainer"> <!-- Why is this interesting -->
  <div class="Title"><h2 id="bb8">BB-8 Robot</h2></div>
  <div class="Content">I initiated this project for fun. I was curious how the robots used in filming the movies worked inside. After doing some research I found photos and videos from the engineers showing how the full scale robot worked. Using the photos and videos of the robot in action I made a design for how it worked internally. Part of my design strategy was to start simple and built a test platform to test the movement of the ball first. Then add the head and puppeteering functionality in a different revision. 
  <br><br>
  Working on a budget I assembled the inner frame from laser cut acrylic pieces with a 3D printed outer shell; with the exterior shell cut into 14 panels. The robot hangs from the drive shaft and uses a counter weight to tilt the ball side to side. To save on buying a counter weight I used the lead-acid battery powering the robot as the counter weight. To drive the ball, I used a 100:1 vex gearbox and motor with a bike chain and another 4:1 ratio. To control the tilt I used some random 12V motor and a 90 degree potentiometer attached to a little gear to measure position. For the electronics, I used some old motor controllers and parts from my car along with a zig-bee enabled Arduino.
  <br><br>
  With this version being a proof of concept for the motion system, I 3D printed gusset plates for the frame and the gears for the drive train of the tilt system. Using cheap 1x1 and 1x2 aluminum tubing to build the frame. The drive shaft was a 1" diameter, keyed, steel rod. Getting the robot into the ball ended up being a challenge.
  </div>
  <div class="eContent">I indentified a section of the ball that could be removed so that the robot could be slipped inside, however the robot weighed ~40lbs so the plastic ball would deform with a section missing. It was a two person job to close it up as one person needed to hold the ball together and make it round while the other person bolted it shut. Completely assembled, the ball weighed 55lbs and was very awkward to carry. I was able to write code for the system to balance, drive, and communicate with a joystick connected to another zig-bee radio module.</div>
  <div class="Photo">
  <img src="/assets/images/bb8-internalstructure_cover.jpg">
  <img src="/assets/images/bb8-drive_cover.gif">
  <img src="/assets/images/bb8-tilt_cover.gif">
  </div>
  <div class="Link"></div>
</div>
<div class="AddContainer">
  <div class="AddPhoto"><img src="/assets/images/bb8-open_cover.jpg"></div>
  <div class="Content">
  Take aways from this prototype:
  <ul>
  <li>Add a way to update the code remotely/ make the USB port more accessible.</li>
  <li>Add a way to charge the battery without having to remove the robot from the ball.</li>
  <li>Switch to LoRa for radio control.</li>
  <li>Simplify power system, 5V and 12V rails only.</li>
  <li>Move more mass to the counterweight/ make the robot lighter for better turning/ control in the future.</li>
  </ul>
  </div>
  <div class="eContent">With my prototype complete and basic testing out of the way, I was able to collaborate with some friends over Spring Break to get it moving. The goal was to program it to operate better, with smoother movement and reliable behavior. Accelerating and slowing the ball needed to be done gradualy using feedback from the on board sensors to prevent the mass from completly flipping around the center.</div>
</div>
<div class="eContainer">
  <div class="Title"></div>
  <div class="Content">The first tests resulted in unpredictable movement forward and backward. Jittering and wobbling was common without tuning and the motor had so much speed and torque that it could spin around the axel in place causing it to just vibrate. We made adjustments to the code and added a PID loop to allow for smooth acceleration and deceleration. Deploying it on a field we found that the ball had better turning than expected given the small counter weight relative to the total mass. 
  <center><img src="/assets/images/bb8-fieldtest_cover.gif" width="90%"></center>
  </div>
  <div class="eContent">Overall, this prototype was a huge success. On our third test drive it rolled off a curb and shattered the acrylic subframe that supports the ball under its own weight. I am excited to move forward with a more refined version of the robot in the future. Utilizing this experience, I plan on adding the head to the next revision along with changes to the frame and layout of the robot.</div>
  <div class="Photo">
  <img src="/assets/images/bb8-firsttest_cover.gif">
  </div>
  <div class="Link"></div>
</div>


<hr><div class="container">
  <div class="Title"><h2 id="miso">MISO Data Logger</h2></div>
  <div class="Content">The goal of the MISO Data Logger was to create a product comparable to industrial underwater sensors while making the sensors modular. The modular I2C Sensor Cap is interchangeable with any I2C capable sensor setup. The MISO logger is equipped with an I2C sensor Input, Real Time Clock (RTC), MicroSD card for config and data storage, magnetic interrupts, and is powered with a standard 18650 battery for easy maintenance.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/MISO-Data-Logger" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/miso-top_cover.jpg" alt="MISO Data Logger PCB Top">
  <img src="/assets/images/miso-bottom_cover.jpg" alt="MISO Data Logger PCB Bottom">
  <img src="/assets/images/miso-enclosure_cover.jpg" alt="MISO enclosure next to comparable Onset sensor">
  </div>
</div>


<hr><div class="container">
  <div class="Title"><h2 id="keeb">Keyboards</h2></div>
  <div class="Content">While exploring options for a replacement keyboard and not finding anything I liked, I chose to design my own keyboard. To create a keyboard that would work best for me. To date, I have designed two keyboards: the Berm and the Split. The Berm is a 65% low profile ortholinear keyboard with separated halves. The Split takes everything I liked about the Berm to the extreme. The Split Lowered the keys by 10mm (from 25mm), added a proper enclosure, and fully split the keyboard in half. With the goal of making a base PCB that is identical for both halves of the keyboard. With it being a left or right half based on which components are populated.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/OrtholinearKeyboards" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/berm_cover.jpg">
  <img src="/assets/images/split_cover.jpg">
  </div>
</div>


<hr><div class="container">
  <div class="Title"><h2 id="opens">OPEnS Lab Research</h2></div>
  <div class="Content">While working at Oregon State University's OPEnS lab, I learned about environmental sensing. I led the SmartRock and Lilypad Projects and assisted Evaporometer, WeatherChimes, RainSavor, and Isotopic Sampler.
  <embed src="/assets/pdfs/SmartRock_AssemblyGuide_CUAHSI_2021.pdf" width="100%" height="360" type="application/pdf">
  </div>
  <div class="Link"><form action="https://github.com/OPEnSLab-OSU" method="get" target="_blank">
  <button class="button-60" type="submit">OPEnS Lab Github</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/lilypad_cover.jpg">
  <img src="/assets/images/evaporometer_cover.jpg">
  </div>
</div>


<hr><div class="eContainer">
  <div class="Title"><h2 id="frc">First Robotics</h2></div>
  <div class="Content">I was on the Pigmice robotics team and competed in the FIRST Robotics Competition (FRC) all four years of high school. I led the CAD of the robot all four years and was Design Captain for my Junior and Senior Year.
  <br><br>
  <center><img src="/assets/images/first-2019_cover.jpg" width="70%"></center>
  </div>
  <div class="Photo"><img src="/assets/images/first-2019competition_cover.jpg"></div>
  <div class="eContent"></div>
  <div class="eLink">
  <center><table>
    <tr>
      <td><form action="https://www.thebluealliance.com/team/2733/2019" method="get" target="_blank">
          <button class="button-60" type="submit">View 2019 Stats</button>
      </form></td>
      <td><form action="https://www.thebluealliance.com/team/2733/2018" method="get" target="_blank">
          <button class="button-60" type="submit">View 2018 Stats</button>
      </form></td>
      <td><form action="https://www.thebluealliance.com/team/2733/2017" method="get" target="_blank">
          <button class="button-60" type="submit">View 2017 Stats</button>
      </form></td>
      <td><form action="https://www.thebluealliance.com/team/2733/2016" method="get" target="_blank">
          <button class="button-60" type="submit">View 2016 Stats</button>
      </form></td>
    </tr>
  </table></center></div>
</div>


<hr><div class="container">
  <div class="Title"><h2 id="instructable">Instructable</h2></div>
  <div class="Content">This is a controller I designed for any Arduino project that needs remote operation. It can connect using RF, nRF, Bluetooth, and more. It is compatible with a display if needed and runs on an internal 9V battery.</div>
  <div class="Link"><form action="https://www.instructables.com/Universal-Arduino-Controller/" method="get" target="_blank">
  <button class="button-60" type="submit">View Instructable</button>
  </form></div>
  <div class="Photo"><img src="/assets/images/instructable_cover.jpg"></div>
</div>
