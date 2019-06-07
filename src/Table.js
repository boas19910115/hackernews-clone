import React from 'react';
import 'tachyons';

export default function Table() {
  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <thead>
            <tr class="stripe-dark">
              <th class="fw6 tl pa3 bg-white">Name</th>
              <th class="fw6 tl pa3 bg-white">Username</th>
              <th class="fw6 tl pa3 bg-white">Email</th>
              <th class="fw6 tl pa3 bg-white">ID</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">Hassan Johnson</td>
              <td class="pa3">@hassan</td>
              <td class="pa3">hassan@companywithalongdomain.co</td>
              <td class="pa3">14419232532474</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}