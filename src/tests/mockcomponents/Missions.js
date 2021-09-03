import React from 'react';

function Missions() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Thaicom</th>
          <td className="description">
            Thaicom is the name of a series of
            communications satellites operated from Thailand,
            and also the name of Thaicom Public Company Limited
            , which is the company that owns and operates the
            Thaicom satellite fleet and other telecommunication
            businesses in Thailand and throughout the Asia-Pacific
            region. The satellite projects were named Thaicom by
            the King of Thailand, His Majesty the King Bhumibol Adulyadej,
            as a symbol of the linkage between Thailand and modern
            communications technology.
          </td>
          <td>
            <p>
              Active member
            </p>
          </td>
          <td>
            <button
              type="button"
            >
              Leave Mission
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Missions;
