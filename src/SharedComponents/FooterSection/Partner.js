import React from 'react';

const Partner = () => {
    return (
        <div className='flex justify-center mb-10'>
            <div className='w-[448px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  p-10 md:p-10 lg:p-10 xl:p-10 2xl:p-10'>
                <h1 className='text-3xl font-bold mt-10'>Partnership - advantages and disadvantages</h1>
                <p>Consider a partnership if the number of people involved is small (up to about 20) and limited liability is not necessary</p>
                <p className='text-xl font-bold mt-10'>Advantages of a partnership include that:</p>
                <ul class="list-disc p-10">
                    <li>two heads (or more) are better than one</li>
                    <li>your business is easy to establish and start-up costs are low</li>
                    <li>more capital is available for the business</li>
                    <li>you'll have greater borrowing capacity</li>
                    <li>high-calibre employees can be made partners</li>
                    <li>there is opportunity for income splitting, an advantage of particular importance due to resultant tax savings</li>
                    <li>partners' business affairs are private</li>
                    <li>there is limited external regulation</li>
                    <li>it's easy to change your legal structure later if circumstances change.</li>
                </ul>
                <div>
                    <p className='text-xl font-bold mt-10'>Disadvantages of a partnership include that:</p>
                    <ul class="list-disc p-10">
                        <li>the liability of the partners for the debts of the business is unlimited</li>
                        <li>each partner is 'jointly and severally' liable for the partnership's debts; that is, each partner is liable for their share of the partnership debts as well as being liable for all the debts</li>
                        <li>there is a risk of disagreements and friction among partners and management</li>
                        <li>each partner is an agent of the partnership and is liable for actions by other partners</li>
                        <li>if partners join or leave, you will probably have to value all the partnership assets and this can be costly.</li>
                    </ul>
                    <p>To end or dissolve a partnership in Picktimely we recommend seeking legal advice regarding what is required.</p>
                </div>
            </div>
        </div>
    );
};

export default Partner;