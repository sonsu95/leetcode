<h2><a href="https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/">1342. Number of Steps to Reduce a Number to Zero<xt-dual class="xt-dual block" xt-origin="1342. Number of Steps to Reduce a Number to Zero" style="opacity: 0.9; font-size: 16px;" xt-translation="1342. 숫자를 0으로 줄이는 단계 수"><br><xt-content xt-marked="ok">1342. 숫자를 0으로 줄이는 단계 수</xt-content></xt-dual></a></h2><h3>Easy</h3><hr><div><p xt-marked="ok" class="xt-translated">Given an integer <code>num</code>, return <em xt-marked="ok">the number of steps to reduce it to zero</em>.<xt-dual class="xt-dual block" xt-origin="Given an integer num, return the number of steps to reduce it to zero." style="opacity: 0.9; font-size: 14px;" xt-translation="정수 num이 주어지면 이를 0으로 줄이는 단계 수를 반환합니다."><br><xt-content xt-marked="ok">정수 num이 주어지면 이를 0으로 줄이는 단계 수를 반환합니다.</xt-content></xt-dual></p>

<p xt-marked="ok" class="xt-translated">In one step, if the current number is even, you have to divide it by <code>2</code>, otherwise, you have to subtract <code>1</code> from it.<xt-dual class="xt-dual block" xt-origin="In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it." style="opacity: 0.9; font-size: 14px;" xt-translation="한 단계에서 현재 숫자가 짝수이면 2로 나누어야 하고, 짝수이면 1을 빼야 합니다."><br><xt-content xt-marked="ok">한 단계에서 현재 숫자가 짝수이면 2로 나누어야 하고, 짝수이면 1을 빼야 합니다.</xt-content></xt-dual></p>

<p>&nbsp;</p>
<p class="xt-translated"><strong class="example" xt-marked="ok">Example 1:</strong><xt-dual class="xt-dual block" xt-origin="Example 1:" style="opacity: 0.9; font-size: 14px;" xt-translation="예시 1:"><br><xt-content xt-marked="ok">예시 1:</xt-content></xt-dual></p>

<pre><strong>Input:</strong> num = 14
<strong>Output:</strong> 6
<strong>Explanation:</strong>&nbsp;
Step 1) 14 is even; divide by 2 and obtain 7.&nbsp;
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.&nbsp;
Step 4) 3 is odd; subtract 1 and obtain 2.&nbsp;
Step 5) 2 is even; divide by 2 and obtain 1.&nbsp;
Step 6) 1 is odd; subtract 1 and obtain 0.
</pre>

<p class="xt-translated"><strong class="example" xt-marked="ok">Example 2:</strong><xt-dual class="xt-dual block" xt-origin="Example 2:" style="opacity: 0.9; font-size: 14px;" xt-translation="예 2:"><br><xt-content xt-marked="ok">예 2:</xt-content></xt-dual></p>

<pre><strong>Input:</strong> num = 8
<strong>Output:</strong> 4
<strong>Explanation:</strong>&nbsp;
Step 1) 8 is even; divide by 2 and obtain 4.&nbsp;
Step 2) 4 is even; divide by 2 and obtain 2.&nbsp;
Step 3) 2 is even; divide by 2 and obtain 1.&nbsp;
Step 4) 1 is odd; subtract 1 and obtain 0.
</pre>

<p class="xt-translated"><strong class="example" xt-marked="ok">Example 3:</strong><xt-dual class="xt-dual block" xt-origin="Example 3:" style="opacity: 0.9; font-size: 14px;" xt-translation="예시 3:"><br><xt-content xt-marked="ok">예시 3:</xt-content></xt-dual></p>

<pre><strong>Input:</strong> num = 123
<strong>Output:</strong> 12
</pre>

<p>&nbsp;</p>
<p class="xt-translated"><strong xt-marked="ok">Constraints:</strong><xt-dual class="xt-dual block" xt-origin="Constraints:" style="opacity: 0.9; font-size: 14px;" xt-translation="제약:"><br><xt-content xt-marked="ok">제약:</xt-content></xt-dual></p>

<ul>
	<li class="xt-translated"><code>0 &lt;= num &lt;= 10<sup>6</sup></code><xt-dual class="xt-dual block" xt-origin="0 <= num <= 106" style="opacity: 0.9; font-size: 14px;"></xt-dual></li>
</ul>
</div>