// SPDX-License-Identifier: MIT LICENSE

pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Token is ERC20, ERC20Burnable, Ownable, ERC20Permit {
    using SafeMath for uint256;
    // mapping(address => bool) controllers;
    uint256 public constant MAXIMUMSUPPLY = 10_000_000 * 10 ** 18;
    bytes32 private constant _PERMIT_TYPEHASH =
        keccak256(
            "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
        );

    constructor() ERC20("NEW Token", "NEW") ERC20Permit("NEW Token") {
        _mint(msg.sender, 7_000_000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) external {
        require(
            (totalSupply() + amount) <= MAXIMUMSUPPLY,
            "Minting would exceed total supply"
        );
        _mint(to, amount);
    }
}
