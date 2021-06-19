"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const month = new Date().getMonth();
exports.default = {
    Query: {
        getMember: (_, _arg, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const getMember = yield models.Member.find({}).sort({ "date": -1 });
            return getMember;
        }),
        getDataByMonth: (_, { month, id }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const getMemberDataByMonth = yield models.Data.find({ month, memberId: id }).populate("memberId").sort({ "date": 1 });
            return getMemberDataByMonth;
        }),
        getMemberData: (_, { at }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const Id = at;
            const getMemberData = yield models.Member.findById({ _id: Id });
            return getMemberData;
        }),
        totalData: (_, _args, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const Data = yield models.Data.find({}).count();
            return {
                count: Data
            };
        }),
        getAllData: (_, { skip }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            let go = 0;
            if (skip > 0) {
                go = skip * 10;
            }
            const Data = yield models.Data.find({}).populate('memberId').sort({ "created": -1 }).limit(10).skip(go);
            return Data;
        }),
        getData: (_, { at }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const DataId = at;
            const getData = yield models.Data.findById({ _id: DataId }).populate('memberId');
            return getData;
        }),
        getListedData: (_, { m_Id }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const Id = m_Id;
            const getListedData = yield models.Data.find({ memberId: Id }).populate('memberId').sort({ "created": -1 });
            return getListedData;
        })
    },
    Mutation: {
        createMember: (_, { input }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const { username, address, phonNumber } = input;
            const memberCreate = new models.Member({
                username,
                address,
                phonNumber,
                month
            });
            yield memberCreate.save();
            return memberCreate;
        }),
        createDataField: (_, { input }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const { memberId, total_p, design, return_p, price, color } = input;
            let amount = total_p * price;
            let member_amount = return_p * price;
            const dateCreate = new models.Data({
                memberId,
                total_p,
                design,
                return_p,
                price,
                color,
                month,
                amount,
                member_amount
            });
            yield dateCreate.save();
            return dateCreate;
        }),
        deleteDataField: (_, { d_id }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const id = d_id;
            const deleteData = yield models.Data.findByIdAndDelete({ _id: id });
            return {
                memberId: deleteData['memberId']
            };
        }),
        deleteMember: (_, { id }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const m_id = id;
            const deleteMember = yield models.Member.findByIdAndDelete({ _id: m_id });
            const deleteMemberData = yield models.Data.deleteMany({ memberId: m_id });
            return {
                delete: "Successful Deleted"
            };
        }),
        editDataField: (_, { input }, { models }) => __awaiter(void 0, void 0, void 0, function* () {
            const { price, design, return_p, color, total_p, id } = input;
            let amount = total_p * price;
            let member_amount = return_p * price;
            const editDataField = yield models.Data.findByIdAndUpdate({ _id: id }, {
                price,
                design,
                return_p,
                color,
                total_p,
                amount,
                member_amount
            });
            yield editDataField.save();
            return editDataField;
        })
    }
};
//# sourceMappingURL=resolvers.js.map