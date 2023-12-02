<h2><a href="https://leetcode.com/problems/counter/">2620. Counter</a></h2><h3>Easy</h3><hr><div><p xt-marked="ok" class="xt-translated">Given an integer&nbsp;<code>n</code>,&nbsp;return a <code>counter</code> function. This <code>counter</code> function initially returns&nbsp;<code>n</code>&nbsp;and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).<xt-dual class="xt-dual block" xt-origin="Given an integer&nbsp;n,&nbsp;return a counter function. This counter function initially returns&nbsp;n&nbsp;and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)." style="opacity: 0.9; font-size: 14px;" xt-translation="정수 n이 주어지면 카운터 함수를 반환합니다. 이 카운터 함수는 처음에는 n을 반환하고 이후 호출될 때마다 이전 값보다 1을 더 많이 반환합니다(n, n + 1, n + 2 등)."><br><xt-content xt-marked="ok">정수 n이 주어지면 카운터 함수를 반환합니다. 이 카운터 함수는 처음에는 n을 반환하고 이후 호출될 때마다 이전 값보다 1을 더 많이 반환합니다(n, n + 1, n + 2 등).</xt-content></xt-dual></p>

<p>&nbsp;</p>
<p class="xt-translated"><strong class="example" xt-marked="ok">Example 1:</strong><xt-dual class="xt-dual block" xt-origin="Example 1:" style="opacity: 0.9; font-size: 14px;" xt-translation="예시 1:"><br><xt-content xt-marked="ok">예시 1:</xt-content></xt-dual></p>

<pre><strong>Input:</strong> 
n = 10 
["call","call","call"]
<strong>Output:</strong> [10,11,12]
<strong>Explanation: 
</strong>counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<p class="xt-translated"><strong class="example" xt-marked="ok">Example 2:</strong><xt-dual class="xt-dual block" xt-origin="Example 2:" style="opacity: 0.9; font-size: 14px;" xt-translation="예 2:"><br><xt-content xt-marked="ok">예 2:</xt-content></xt-dual></p>

<pre><strong>Input:</strong> 
n = -2
["call","call","call","call","call"]
<strong>Output:</strong> [-2,-1,0,1,2]
<strong>Explanation:</strong> counter() initially returns -2. Then increases after each sebsequent call.
</pre>

<p>&nbsp;</p>
<p class="xt-translated"><strong xt-marked="ok">Constraints:</strong><xt-dual class="xt-dual block" xt-origin="Constraints:" style="opacity: 0.9; font-size: 14px;" xt-translation="제약:"><br><xt-content xt-marked="ok">제약:</xt-content></xt-dual></p>

<ul>
	<li class="xt-translated"><code>-1000<sup>&nbsp;</sup>&lt;= n &lt;= 1000</code><xt-dual class="xt-dual block" xt-origin="-1000&nbsp;<= n <= 1000" style="opacity: 0.9; font-size: 14px;"></xt-dual></li>
	<li class="xt-translated"><code>0 &lt;= calls.length &lt;= 1000</code><xt-dual class="xt-dual block" xt-origin="0 <= calls.length <= 1000" style="opacity: 0.9; font-size: 14px;" xt-translation="0 <= 통화 길이 <= 1000"><br><xt-content xt-marked="ok">0 &lt;= 통화 길이 &lt;= 1000</xt-content></xt-dual></li>
	<li class="xt-translated"><code>calls[i] === "call"</code><xt-dual class="xt-dual block" xt-origin="calls[i] === &quot;call&quot;" style="opacity: 0.9; font-size: 14px;" xt-translation="전화[i] === &quot;전화&quot;"><br><xt-content xt-marked="ok">전화[i] === "전화"</xt-content></xt-dual></li>
</ul>
</div>