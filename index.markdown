---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
title: Portfolio
---     

# Portfolio



<hr id="meadow"><div class="container">
  <div class="Title"><h2>Meadowlark Mini</h2></div>
  <div class="Content">After finishing the rocketry competition at the <a href="#esra">Spaceport America Cup</a> I was inspired to get my Level 2 high power rocket certification. To do that I would need a flight computer and after some research I decided I wanted to build one myself. This flight computer aims to deliver a low cost dual deploy functionality. The controller is equip with dual pyro channels, buzzer, MicroSD for logging, altimeter, gyroscope, and accelerometer. All in a package that can fit in a 29mm chassis for H class motors, the smallest high powered motors available.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/Meadowlark-Mini/tree/main" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo"><img src="/assets/images/meadowlark-mini_cover.jpg" alt="Meadowlark Mini PCB"></div>
</div>

<hr id="esra">

## Experimental Sounding Rocketry Association (ESRA) Team

In September of 2023 the president of Oregon State University's (OSU) American Institute of Aeronautics and Astronautics (AIAA) program reached out and asked me to form a new rocketry team. I attended to lots of club recruiting events and presented at the AIAA fall general body meeting and recruited a diverse team of undergraduates. By December we were awarded an OSGC grant and were accepted to compete at the Experimental Sounding Rocketry Association’s (ESRA) Spaceport America cup. As team captain I secured a space to work in, materials, and supplies. Over the next four months we designed, prototyped, tested, and flew our rocket for the first time in Brothers Oregon. The rocket was successfully with minor damage to the forward section of the rocket due to a parachute failure. After shortening the rocket by a foot strakes (long fins above our main fins) were added to increase stability. After an explosive full scale CATO of the rocket motor during static testing we were unable to perform a second flight before competition.

<img src="/assets/images/esra-rocketcad_banner.jpg" alt="Rocket CAD showing cutway of the rocket">

<div class="container">
  <div class="Title"></div>
  <div class="Content">During the flight at Spaceport America the rocket lost the motor due to a gas leak. The rocket flew to only 5000ft before returning to the ground ballistic. While this was an suboptimal outcome I could not be more proud the team and everything we accomplished. Our technical report scored well and our engineering was sound. Thank you to all the everyone who spent weekends and late nights to make this dream come true. I couldn't have asked for a better team, your dedication and perseverance was inspiring.
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
<br>
<div id="beavs" class="container">
  <div class="Title"><h3>BEAVS Hardware</h3></div>
  <div class="Content">For my senior capstone project at Oregon State I brought back the Blade Extending Apogee Variance System (BEAVS) research project. This year we aimed to make the largest most advanced air brakes at Oregon State to date. The system is actuated by a single high torque servo motor with a rack and pinion to control the blades. The controller is run off a RP2040 with an altimeter and 9-axis inertial measurement unit. The parts were machined from 7075 aircraft grade aluminum with the total system weighing 1.577kg (hardware, electronics, and batteries). The blades sit flush with the 6.25" airframe and are able to extend 70mm out each side of the airframe. The BEAVS4 system flew at Spaceport America however was unable to activate due to a motor failure early in flight, with the rocket only reaching 5000ft.
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
<br>
<div id="launch" class="container">
  <div class="Title"><h3>Launch Boxes</h3></div>
  <div class="Content">After our first launch in Brothers Oregon we needed a more reliable and up to date launch control system. Following OROC and Tripoli guidelines to ensure that it met all safety standards. 
  <br>
  Each box is powered by an RP2040 equipped with LoRa radios at 933MHz and is equipped with BNC quick-connects for antennas and USB-C for charging and debug. They have the same radio indicators and buzzers for visual and audio ques which are synced at all times. The field box has a removable 10ft cable with clips to connect to the ignitor. The system is mechanically disconnected until it is armed and fired remotely. With the box being turned on before evacuating the pad. The control box is able to see the status of the field box remotely. It is able to arm the field box with a key and fire with a button controlling two separate relays in the field box. With indicators for continuity in case of a miss-fire. 
  <br><br>
  I hope to someday update the boxes with proper PCBs instead of the hand wired boards they currently use. 
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
<br>
<div id="l1" class="container">
  <div class="Title"><h3>High Power Rocketry L1 Certification</h3></div>
  <div class="Content">Part of my role as team captain was transporting rocket motors. The university insurance asked that we get high power certified. I was L1 certified by NAR in Brothers Oregon with a successful flight of my Balsa Rocket on an H class motor.
  <br>
  <br>
  <center><img src="/assets/images/l1-flight_cover.gif" width="70%" alt="Both pcbs hand assembled to control the two launch boxes"></center>
  </div>
  <div class="Link"></div>
  <div class="Photo">
  <img src="/assets/images/l1-photos_cover.jpg" alt="The control and field launch boxes stacked">
  </div>
</div>


<hr id="burl"><div class="container">
  <div class="Title"><h2>Burl Mini</h2></div>
  <div class="Content">The goal of the project was to deliver a Wi-Fi capable air sensing module. With it able to monitor gas concentrations and air quality for uses in indoor farming and air monitoring. Be competitive on functionality while adding modern, user focused features. This involved adding USB-C for power and debugging, MicroSD for data logging and configuration, and user swapable battery.
  <br><br>
  I focused more on the user experience and making a polished product while trying to minimize the number of parts onboard. To keeping the system safe the enclosure lid snaps in place covering the sensors and MicroSD slot from damage during operation. The base is equipped with mounting holes and slots for various mounting options.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/Meadowlark-Mini/tree/main" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/burl-pcb_cover.jpg">
  <img src="/assets/images/burl-enclosure_cover.jpg"></div>
</div>


<hr id="bb8"><div class="eContainer">
  <div class="Title"><h2>BB-8 Robot</h2></div>
  <div class="Content">This project was just pure fun. I had this idea over winter break and was able to design, test and build a full scale bb-8 robot. I knew I wanted to start simple and built a test platform to test the movement of the ball first. With the addition of the head and puppeteering later. 
  <br><br>
  Working on a budget I assembled the inner frame from laser cut pieces with a 3D printed outer shell. With the exterior shell cut into 14 panels. The robot hangs from the drive shaft and uses a counter weight to tilt. To save on buying a counter weight I used the lead-acid battery powering the robot as the counter weight. To drive the ball I used a 100:1 vex gearbox and motor with a bike chain and another 4:1 ratio. To control the tilt I used some random 12V motor and a 90 degree potentiometer attached to a little gear to measure position. For the electronics I used some old motor controllers and parts from my car along with a zig-bee enabled Arduino.
  <br><br>
  With this version being a proof of concept for the motion system I 3D printed gusset plates for the frame and the gears for the drive train of the tilt system. Using cheap 1x1 aluminum tubing to build the frame. The drive shaft was a 1in diameter, keyed, steel rod. Getting the robot into the ball ended up being a task.
  </div>
  <div class="eContent">I chose a section of the ball that could be removed so that the robot could be slipped inside however the robot weighed ~40lbs so the plastic ball would deform with a section missing. Making it a two person job to close it up as one person needs to hold the ball together while the other bolts the thing shut. With the ball completely assembled it weighed in at 55lbs and was very awkward to carry. I was able to write code for the system to balance, drive, and communicate with a joystick connected to another zig-bee radio module.</div>
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
  <li>Simplify power system, 5V and 12V only.</li>
  <li>Move more mass to the counterweight/ made the robot lighter for better turning/ control.</li>
  </ul>
  </div>
  <div class="eContent">With my prototype complete and basic testing out of the way I was able to collaborate with some friends over spring break and get it moving. The goal was to get it to be able of better, smoother movement and reliable behavior.</div>
</div>
<div class="eContainer">
  <div class="Title"></div>
  <div class="Content">The first tests resulted in unpredictable movement forward and backward. Jittering and wobbling was common without tuning and the motor had so much speed and torque that it could spin around the axel in place making it just vibrate. We got it sorted and it drove well, going to a field we found it to have better turning than expected given the small counter weight relative to the total mass. 
  <center><img src="/assets/images/bb8-fieldtest_cover.gif" width="90%"></center>
  </div>
  <div class="eContent">Overall this prototype was a huge success. On our second outing for test driving it rolled off a curb and shattered the acrylic subframe that makes up the ball under its own weight. I am excited to move forward with a more refiled version of the robot in the future. With this experience I plan on adding the head to the next revision along with changes to the frame and layout of the robot.</div>
  <div class="Photo">
  <img src="/assets/images/bb8-firsttest_cover.gif">
  </div>
  <div class="Link"></div>
</div>


<hr id="miso"><div class="container">
  <div class="Title"><h2>MISO Data Logger</h2></div>
  <div class="Content">The goal of the MISO Data Logger was to make a comparable product to industrial underwater sensors while making the sensors modular. The modular I2C Sensor Cap is interchangeable with any I2C capable sensor setup. The MISO logger is equipped with an I2C sensor Input, Real Time Clock (RTC), MicroSD card for config and data storage, magnetic interrupts, and is powered with a standard 18650 battery for easy maintenance.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/MISO-Data-Logger" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/miso-top_cover.jpg" alt="MISO Data Logger PCB Top">
  <img src="/assets/images/miso-bottom_cover.jpg" alt="MISO Data Logger PCB Bottom">
  <img src="/assets/images/miso-enclosure_cover.jpg" alt="MISO enclosure next to comparable Onset sensor">
  </div>
</div>


<hr id="keeb"><div class="container">
  <div class="Title"><h2>Keyboards</h2></div>
  <div class="Content">I went down the rabbit hole of custom keyboards and could not find a keyboard that I liked, I ended up designing two keyboards, the Berm and the Split. The Berm is a 65% low profile ortholinear keyboard with separated halves. The split takes everything I liked about the Berm to the extreme. Lowering the keys by 10mm, adding a proper enclosure, and fully splitting the keyboard in half. With the goal of making the same base PCB for each half and populating different components to get a different side.</div>
  <div class="Link"><form action="https://github.com/colinhalebrown/OrtholinearKeyboards" method="get" target="_blank">
  <button class="button-60" type="submit">View Documentation</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/berm_cover.jpg">
  <img src="/assets/images/split_cover.jpg">
  </div>
</div>


<hr id="opens"><div class="container">
  <div class="Title"><h2>OPEnS Lab Work</h2></div>
  <div class="Content">While working at Oregon State Universities OPEnS lab, I got the opportunity to learn about environmental sensing. I led the Smart Rock and Lilypad Projects and assisted Evaporometer, WeatherChimes, RainSavor, and Isotopic Sampler.
  <embed src="/assets/pdfs/SmartRock_AssemblyGuide_CUAHSI_2021.pdf" width="100%" height="360" type="application/pdf">
  </div>
  <div class="Link"><form action="https://github.com/OPEnSLab-OSU" method="get" target="_blank">
  <button class="button-60" type="submit">OPeNs Lab Github</button>
  </form></div>
  <div class="Photo">
  <img src="/assets/images/lilypad_cover.jpg">
  <img src="/assets/images/evaporometer_cover.jpg">
  </div>
</div>


<hr id="frc"><div class="eContainer">
  <div class="Title"><h2>First Robotics</h2></div>
  <div class="Content">I was the Pigmice robotics team and competed in the FIRST Robotics Competition (FRC) all four years of high school. I was Design Captain for my Junior and Senior Year. Leading the CAD of the robot all four years.
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


<hr id="instructable"><div class="container">
  <div class="Title"><h2>Instructable</h2></div>
  <div class="Content">This is a controller I designed for any Arduino project that needs remote operation. It can connect using RF, nRF, Bluetooth, and more. It is compatible with a display if needed and runs on an internal 9V battery.</div>
  <div class="Link"><form action="https://www.instructables.com/Universal-Arduino-Controller/" method="get" target="_blank">
  <button class="button-60" type="submit">View Instructable</button>
  </form></div>
  <div class="Photo"><img src="/assets/images/instructable_cover.jpg"></div>
</div>