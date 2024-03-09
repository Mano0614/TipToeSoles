document.addEventListener("DOMContentLoaded", function () {
  var womenBtn = document.getElementById("women-btn");
  var menBtn = document.getElementById("men-btn");
  var content = document.getElementById("size-guide-content");

  womenBtn.addEventListener("click", function () {
    // Activate the clicked button
    womenBtn.classList.add("active");
    menBtn.classList.remove("active");
    content.innerHTML =
      "<table>" +
      "<tr><th>CM</th><th>US</th><th>UK</th><th>EU</th></tr>" +
      "<tr><td>21.6</td><td>4.5</td><td>2</td><td>34</td></tr>" +
      "<tr><td>21.9</td><td>5</td><td>2.5</td><td>34/35</td></tr>" +
      "<tr><td>22.2</td><td>5.5</td><td>3</td><td>35</td></tr>" +
      "<tr><td>22.9</td><td>6</td><td>3.5</td><td>36</td></tr>" +
      "<tr><td>23.2</td><td>6.5</td><td>4</td><td>36/37</td></tr>" +
      "<tr><td>23.5</td><td>7</td><td>4.5</td><td>37</td></tr>" +
      "<tr><td>24.1</td><td>7.5</td><td>5</td><td>38</td></tr>" +
      "<tr><td>24.4</td><td>8</td><td>5.5</td><td>38/39</td></tr>" +
      "<tr><td>24.8</td><td>8.5</td><td>6</td><td>39</td></tr>" +
      "<tr><td>25.4</td><td>9</td><td>6.5</td><td>39/40</td></tr>" +
      "<tr><td>25.7</td><td>9.5</td><td>7</td><td>40</td></tr>" +
      "<tr><td>26</td><td>10</td><td>7.5</td><td>41</td></tr>" +
      "<tr><td>26.7</td><td>10.5</td><td>8</td><td>41/42</td></tr>" +
      "<tr><td>27</td><td>11</td><td>8.5</td><td>43</td></tr>" +
      "<tr><td>27.3</td><td>11.5</td><td>9</td><td>44</td></tr>" +
      "<tr><td>27.9</td><td>12</td><td>10</td><td>44</td></tr>" +
      "<tr><td>28.6</td><td>13</td><td>11</td><td>45</td></tr>" +
      "</table>";
  });

  menBtn.addEventListener("click", function () {
    menBtn.classList.add("active");
    womenBtn.classList.remove("active");
    content.innerHTML =
      "<table>" +
      "<tr><th>CM</th><th>US</th><th>UK</th><th>EU</th></tr>" +
      "<tr><td>24.5</td><td>5</td><td>6</td><td>38</td></tr>" +
      "<tr><td>25</td><td>5.5</td><td>6.5</td><td>39</td></tr>" +
      "<tr><td>25.5</td><td>6</td><td>7</td><td>40</td></tr>" +
      "<tr><td>26</td><td>6.5</td><td>7.5</td><td>40.5</td></tr>" +
      "<tr><td>26.5</td><td>7</td><td>8</td><td>41</td></tr>" +
      "<tr><td>27</td><td>7.5</td><td>8.5</td><td>41.5</td></tr>" +
      "<tr><td>27.5</td><td>8</td><td>9</td><td>42</td></tr>" +
      "<tr><td>28</td><td>8.5</td><td>9.5</td><td>42.5</td></tr>" +
      "<tr><td>28.5</td><td>9</td><td>10</td><td>43</td></tr>" +
      "<tr><td>29</td><td>9.5</td><td>10.5</td><td>44</td></tr>" +
      "<tr><td>29.5</td><td>10</td><td>11</td><td>45</td></tr>" +
      "<tr><td>30</td><td>10.5</td><td>11.5</td><td>45.5</td></tr>" +
      "<tr><td>30.5</td><td>11</td><td>12</td><td>46</td></tr>" +
      "<tr><td>31.5</td><td>12</td><td>13</td><td>47</td></tr>" +
      "<tr><td>32</td><td>13</td><td>14</td><td>48</td></tr>" +
      "<tr><td>32.5</td><td>14</td><td>15</td><td>49</td></tr>" +
      "<tr><td>33</td><td>15</td><td>16</td><td>50</td></tr>" +
      "</table>";
  });

  womenBtn.click();
});
