<h2><a href="https://leetcode.com/problems/array-prototype-last/">2619. Array Prototype Last</a></h2><h3>Easy</h3><hr><div><p xt-marked="ok" class="xt-translated _xt-translated_1bf9u_26">Write code that enhances all arrays such that you can call the&nbsp;<code>array.last()</code>&nbsp;method on any array and it will return the last element. If there are no elements in the array, it should return&nbsp;<code>-1</code>.</p><p class="xt-dual _dual-block_1bf9u_20 " xt-origin="Write code that enhances all arrays such that you can call the&nbsp;array.last()&nbsp;method on any array and it will return the last element. If there are no elements in the array, it should return&nbsp;-1." style="opacity: 0.9; font-size: 14px;" xt-translation="모든 배열에서 array.last() 메소드를 호출할 수 있고 마지막 요소가 반환되도록 모든 배열을 향상시키는 코드를 작성하세요. 배열에 요소가 없으면 -1을 반환해야 합니다.">모든 배열에서 array.last() 메소드를 호출할 수 있고 마지막 요소가 반환되도록 모든 배열을 향상시키는 코드를 작성하세요. 배열에 요소가 없으면 -1을 반환해야 합니다.</p>

<p xt-marked="ok" class="xt-translated _xt-translated_1bf9u_26">You may assume the array is the output of&nbsp;<code>JSON.parse</code>.</p><p class="xt-dual _dual-block_1bf9u_20 " xt-origin="You may assume the array is the output of&nbsp;JSON.parse." style="opacity: 0.9; font-size: 14px;" xt-translation="배열이 JSON.parse의 출력이라고 가정할 수 있습니다.">배열이 JSON.parse의 출력이라고 가정할 수 있습니다.</p>

<p>&nbsp;</p>
<p class="xt-translated _xt-translated_1bf9u_26"><strong class="example" xt-marked="ok">Example 1:</strong></p><p class="xt-dual _dual-block_1bf9u_20 " xt-origin="Example 1:" style="opacity: 0.9; font-size: 14px;" xt-translation="예시 1:">예시 1:</p>

<pre><strong>Input:</strong> nums = [null, {}, 3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Calling nums.last() should return the last element: 3.
</pre>

<p class="xt-translated _xt-translated_1bf9u_26"><strong class="example" xt-marked="ok">Example 2:</strong></p><p class="xt-dual _dual-block_1bf9u_20 " xt-origin="Example 2:" style="opacity: 0.9; font-size: 14px;" xt-translation="예 2:">예 2:</p>

<pre><strong>Input:</strong> nums = []
<strong>Output:</strong> -1
<strong>Explanation:</strong> Because there are no elements, return -1.
</pre>

<p>&nbsp;</p>
<p class="xt-translated _xt-translated_1bf9u_26"><strong xt-marked="ok">Constraints:</strong></p><p class="xt-dual _dual-block_1bf9u_20 " xt-origin="Constraints:" style="opacity: 0.9; font-size: 14px;" xt-translation="제약:">제약:</p>

<ul>
	<li class="xt-translated _xt-translated_1bf9u_26"><code>0 &lt;= arr.length &lt;= 1000</code><xt-dual class="xt-dual _dual-inline_1bf9u_13 " xt-origin="0 <= arr.length <= 1000" style="opacity: 0.9; font-size: 14px;" xt-translation="0 <= 배열 길이 <= 1000">0 &lt;= 배열 길이 &lt;= 1000</xt-dual></li>
</ul>
</div>