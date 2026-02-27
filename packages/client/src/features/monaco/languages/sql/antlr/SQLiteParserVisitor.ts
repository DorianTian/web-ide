// @ts-nocheck
// Generated from SQLiteParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ParseContext } from "./SQLiteParser";
import { Sql_stmt_listContext } from "./SQLiteParser";
import { Sql_stmtContext } from "./SQLiteParser";
import { Alter_table_stmtContext } from "./SQLiteParser";
import { Analyze_stmtContext } from "./SQLiteParser";
import { Attach_stmtContext } from "./SQLiteParser";
import { Begin_stmtContext } from "./SQLiteParser";
import { Commit_stmtContext } from "./SQLiteParser";
import { Rollback_stmtContext } from "./SQLiteParser";
import { Savepoint_stmtContext } from "./SQLiteParser";
import { Release_stmtContext } from "./SQLiteParser";
import { Create_index_stmtContext } from "./SQLiteParser";
import { Indexed_columnContext } from "./SQLiteParser";
import { Create_table_stmtContext } from "./SQLiteParser";
import { Table_optionsContext } from "./SQLiteParser";
import { Column_defContext } from "./SQLiteParser";
import { Type_nameContext } from "./SQLiteParser";
import { Column_constraintContext } from "./SQLiteParser";
import { Signed_numberContext } from "./SQLiteParser";
import { Table_constraintContext } from "./SQLiteParser";
import { Foreign_key_clauseContext } from "./SQLiteParser";
import { Conflict_clauseContext } from "./SQLiteParser";
import { Create_trigger_stmtContext } from "./SQLiteParser";
import { Create_view_stmtContext } from "./SQLiteParser";
import { Create_virtual_table_stmtContext } from "./SQLiteParser";
import { With_clauseContext } from "./SQLiteParser";
import { Common_table_expressionContext } from "./SQLiteParser";
import { Cte_table_nameContext } from "./SQLiteParser";
import { Delete_stmtContext } from "./SQLiteParser";
import { Detach_stmtContext } from "./SQLiteParser";
import { Drop_stmtContext } from "./SQLiteParser";
import { ExprContext } from "./SQLiteParser";
import { Expr_recursiveContext } from "./SQLiteParser";
import { Expr_orContext } from "./SQLiteParser";
import { Expr_andContext } from "./SQLiteParser";
import { Expr_notContext } from "./SQLiteParser";
import { Expr_binaryContext } from "./SQLiteParser";
import { Expr_comparisonContext } from "./SQLiteParser";
import { Expr_bitwiseContext } from "./SQLiteParser";
import { Expr_additionContext } from "./SQLiteParser";
import { Expr_multiplicationContext } from "./SQLiteParser";
import { Expr_stringContext } from "./SQLiteParser";
import { Expr_collateContext } from "./SQLiteParser";
import { Expr_unaryContext } from "./SQLiteParser";
import { Expr_baseContext } from "./SQLiteParser";
import { Raise_functionContext } from "./SQLiteParser";
import { Literal_valueContext } from "./SQLiteParser";
import { Percentile_clauseContext } from "./SQLiteParser";
import { Value_rowContext } from "./SQLiteParser";
import { Values_clauseContext } from "./SQLiteParser";
import { Insert_stmtContext } from "./SQLiteParser";
import { Returning_clauseContext } from "./SQLiteParser";
import { Upsert_clauseContext } from "./SQLiteParser";
import { Pragma_stmtContext } from "./SQLiteParser";
import { Pragma_valueContext } from "./SQLiteParser";
import { Reindex_stmtContext } from "./SQLiteParser";
import { Select_stmtContext } from "./SQLiteParser";
import { Join_clauseContext } from "./SQLiteParser";
import { Select_coreContext } from "./SQLiteParser";
import { Table_or_subqueryContext } from "./SQLiteParser";
import { Result_columnContext } from "./SQLiteParser";
import { Join_operatorContext } from "./SQLiteParser";
import { Join_constraintContext } from "./SQLiteParser";
import { Compound_operatorContext } from "./SQLiteParser";
import { Update_stmtContext } from "./SQLiteParser";
import { Column_name_listContext } from "./SQLiteParser";
import { Qualified_table_nameContext } from "./SQLiteParser";
import { Vacuum_stmtContext } from "./SQLiteParser";
import { Filter_clauseContext } from "./SQLiteParser";
import { Window_defnContext } from "./SQLiteParser";
import { Over_clauseContext } from "./SQLiteParser";
import { Frame_specContext } from "./SQLiteParser";
import { Frame_clauseContext } from "./SQLiteParser";
import { Order_clauseContext } from "./SQLiteParser";
import { Limit_clauseContext } from "./SQLiteParser";
import { Ordering_termContext } from "./SQLiteParser";
import { Asc_descContext } from "./SQLiteParser";
import { Frame_leftContext } from "./SQLiteParser";
import { Frame_rightContext } from "./SQLiteParser";
import { Frame_singleContext } from "./SQLiteParser";
import { Error_messageContext } from "./SQLiteParser";
import { FilenameContext } from "./SQLiteParser";
import { Module_argumentContext } from "./SQLiteParser";
import { Module_argument_outerContext } from "./SQLiteParser";
import { Module_argument_innerContext } from "./SQLiteParser";
import { Fallback_excluding_conflictsContext } from "./SQLiteParser";
import { Join_keywordContext } from "./SQLiteParser";
import { FallbackContext } from "./SQLiteParser";
import { NameContext } from "./SQLiteParser";
import { Function_nameContext } from "./SQLiteParser";
import { Schema_nameContext } from "./SQLiteParser";
import { Table_nameContext } from "./SQLiteParser";
import { Table_or_index_nameContext } from "./SQLiteParser";
import { Column_nameContext } from "./SQLiteParser";
import { Column_name_excluding_stringContext } from "./SQLiteParser";
import { Column_aliasContext } from "./SQLiteParser";
import { Collation_nameContext } from "./SQLiteParser";
import { Foreign_tableContext } from "./SQLiteParser";
import { Index_nameContext } from "./SQLiteParser";
import { Trigger_nameContext } from "./SQLiteParser";
import { View_nameContext } from "./SQLiteParser";
import { Module_nameContext } from "./SQLiteParser";
import { Pragma_nameContext } from "./SQLiteParser";
import { Savepoint_nameContext } from "./SQLiteParser";
import { Table_aliasContext } from "./SQLiteParser";
import { Table_alias_excluding_joinsContext } from "./SQLiteParser";
import { Window_nameContext } from "./SQLiteParser";
import { AliasContext } from "./SQLiteParser";
import { Base_window_nameContext } from "./SQLiteParser";
import { Table_function_nameContext } from "./SQLiteParser";
import { Any_name_excluding_raiseContext } from "./SQLiteParser";
import { Any_name_excluding_joinsContext } from "./SQLiteParser";
import { Any_name_excluding_stringContext } from "./SQLiteParser";
import { Any_nameContext } from "./SQLiteParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SQLiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SQLiteParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SQLiteParser.parse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParse?: (ctx: ParseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.sql_stmt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_stmt_list?: (ctx: Sql_stmt_listContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.sql_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_stmt?: (ctx: Sql_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.alter_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.analyze_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_stmt?: (ctx: Analyze_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.attach_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttach_stmt?: (ctx: Attach_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.begin_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegin_stmt?: (ctx: Begin_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.commit_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommit_stmt?: (ctx: Commit_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.rollback_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_stmt?: (ctx: Rollback_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.savepoint_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_stmt?: (ctx: Savepoint_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.release_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelease_stmt?: (ctx: Release_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_index_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_index_stmt?: (ctx: Create_index_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.indexed_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexed_column?: (ctx: Indexed_columnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_table_stmt?: (ctx: Create_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_options?: (ctx: Table_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_def?: (ctx: Column_defContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_name?: (ctx: Type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_constraint?: (ctx: Column_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.signed_number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSigned_number?: (ctx: Signed_numberContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_constraint?: (ctx: Table_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.foreign_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_key_clause?: (ctx: Foreign_key_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.conflict_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConflict_clause?: (ctx: Conflict_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_trigger_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_trigger_stmt?: (ctx: Create_trigger_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_view_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_view_stmt?: (ctx: Create_view_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_virtual_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_virtual_table_stmt?: (ctx: Create_virtual_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause?: (ctx: With_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.common_table_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_table_expression?: (ctx: Common_table_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.cte_table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCte_table_name?: (ctx: Cte_table_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.delete_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_stmt?: (ctx: Delete_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.detach_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDetach_stmt?: (ctx: Detach_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.drop_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_stmt?: (ctx: Drop_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_recursive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_recursive?: (ctx: Expr_recursiveContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_or`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_or?: (ctx: Expr_orContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_and`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_and?: (ctx: Expr_andContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_not?: (ctx: Expr_notContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_binary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_binary?: (ctx: Expr_binaryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_comparison`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_comparison?: (ctx: Expr_comparisonContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_bitwise`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_bitwise?: (ctx: Expr_bitwiseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_addition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_addition?: (ctx: Expr_additionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_multiplication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_multiplication?: (ctx: Expr_multiplicationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_string?: (ctx: Expr_stringContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_collate?: (ctx: Expr_collateContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_unary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_unary?: (ctx: Expr_unaryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_base`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_base?: (ctx: Expr_baseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.raise_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRaise_function?: (ctx: Raise_functionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.literal_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral_value?: (ctx: Literal_valueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.percentile_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPercentile_clause?: (ctx: Percentile_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.value_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue_row?: (ctx: Value_rowContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause?: (ctx: Values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.insert_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_stmt?: (ctx: Insert_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturning_clause?: (ctx: Returning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.upsert_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpsert_clause?: (ctx: Upsert_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.pragma_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_stmt?: (ctx: Pragma_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.pragma_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_value?: (ctx: Pragma_valueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.reindex_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_stmt?: (ctx: Reindex_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.select_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_stmt?: (ctx: Select_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_clause?: (ctx: Join_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.select_core`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_core?: (ctx: Select_coreContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_or_subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_or_subquery?: (ctx: Table_or_subqueryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.result_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResult_column?: (ctx: Result_columnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_operator?: (ctx: Join_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_constraint?: (ctx: Join_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.compound_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_operator?: (ctx: Compound_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.update_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_stmt?: (ctx: Update_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name_list?: (ctx: Column_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.qualified_table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_table_name?: (ctx: Qualified_table_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.vacuum_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_stmt?: (ctx: Vacuum_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.filter_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_clause?: (ctx: Filter_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.window_defn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_defn?: (ctx: Window_defnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_spec?: (ctx: Frame_specContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_clause?: (ctx: Frame_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.order_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_clause?: (ctx: Order_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.limit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimit_clause?: (ctx: Limit_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.ordering_term`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrdering_term?: (ctx: Ordering_termContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.asc_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsc_desc?: (ctx: Asc_descContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_left`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_left?: (ctx: Frame_leftContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_right`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_right?: (ctx: Frame_rightContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_single`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_single?: (ctx: Frame_singleContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.error_message`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_message?: (ctx: Error_messageContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.filename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilename?: (ctx: FilenameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.module_argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_argument?: (ctx: Module_argumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.module_argument_outer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_argument_outer?: (ctx: Module_argument_outerContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.module_argument_inner`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_argument_inner?: (ctx: Module_argument_innerContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.fallback_excluding_conflicts`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFallback_excluding_conflicts?: (ctx: Fallback_excluding_conflictsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_keyword?: (ctx: Join_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.fallback`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFallback?: (ctx: FallbackContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName?: (ctx: NameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_name?: (ctx: Function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name?: (ctx: Schema_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_name?: (ctx: Table_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_or_index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_or_index_name?: (ctx: Table_or_index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name?: (ctx: Column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_name_excluding_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name_excluding_string?: (ctx: Column_name_excluding_stringContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_alias?: (ctx: Column_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.collation_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollation_name?: (ctx: Collation_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.foreign_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_table?: (ctx: Foreign_tableContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_name?: (ctx: Index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.trigger_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_name?: (ctx: Trigger_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.view_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_name?: (ctx: View_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.module_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_name?: (ctx: Module_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.pragma_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_name?: (ctx: Pragma_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.savepoint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_name?: (ctx: Savepoint_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_alias?: (ctx: Table_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_alias_excluding_joins`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_alias_excluding_joins?: (ctx: Table_alias_excluding_joinsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.window_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_name?: (ctx: Window_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias?: (ctx: AliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.base_window_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBase_window_name?: (ctx: Base_window_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_function_name?: (ctx: Table_function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.any_name_excluding_raise`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name_excluding_raise?: (ctx: Any_name_excluding_raiseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.any_name_excluding_joins`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name_excluding_joins?: (ctx: Any_name_excluding_joinsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.any_name_excluding_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name_excluding_string?: (ctx: Any_name_excluding_stringContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name?: (ctx: Any_nameContext) => Result;
}

